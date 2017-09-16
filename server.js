'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const uuid = require('uuid/v4');

const app = express();


app.use(express.static('public'));
app.use(body.json());
app.use(cookie());

const users = {};
let ids = {};
const day = 1000 * 60 * 60 * 24;


app.post('/register', function (req, res) {
    const login = req.body.login;
    const email = req.body.email;
    const password = req.body.password;

    if (
        !login || !email || !password ||
        !password.match(/^\S{4,}$/) ||
        !email.match(/@/)
    ) {
        return res.status(400).json({error: 'Invalid data'});
    }
    if (users[login]) {
        return res.status(400).json({error: 'User is exists'});
    }

    if (!users[login]) {
        users[login] = {
            login,
            email,
            password,
        }
    }

    const new_id = uuid();
    ids[new_id] = login;

    res.cookie('cookie', new_id, {
        expires: new Date(Date.now() + day)
    });
    res.json({'response': 200});
});

app.post('/login', function (req, res) {
    const login = req.body.login;
    const password = req.body.password;
    if (
        !login || !password ||
        !password.match(/^\S{4,}$/)
    ) {
        return res.status(400).end();
    }

    let findUserInDb = false;
    Object.keys(users).forEach(elem => {
        if (login === elem) {
            findUserInDb = true;
        }
    });

    const new_id = uuid();
    ids[new_id] = login;

    res.cookie('cookie', new_id, {
        expires: new Date(Date.now() + day)
    });

    if (findUserInDb) {
        res.json({'response': 200, 'success': 'yes'});
    } else {
        res.json({'response': 200, 'success': 'no'});
    }
});

app.get('/isauth', (req, res) => {
    const id = req.cookies['cookie'];
    const login = ids[id];

    res.set('Content-Type', 'application/json; charset=utf8');

    if (!login || !ids[id]) {
        res.json({'user': null});
    } else {
        res.json({'user': login});
    }

});

app.get('/exit', (req, res) => {
    res.cookie('cookie', null, {
        expires: new Date(Date.now())
    });
    res.json({'status': 'ok'});
});

app.get('*', (req, res) => {
    res.send('404');
});


const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`App start on port ${port}`);
});