'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const uuid = require('uuid/v4');

const app = express();

// app.use(morgan('dev'));
app.use(express.static('public'));
app.use(body.json());
app.use(cookie());

const users = {};

app.post('/register', function (req, res) {
    const login = req.body.login;
    const email = req.body.email;
    const  password = req.body.password;
    if (!login || !email || !password) {
        return res.status(400).end();
    }
    if (!users[login]) {
        users[login] = {
            login,
            email,
            password,
        }
    }
    res.json({'response': 200});
});

app.post('/login', function (req, res) {
    const login = req.body.login;
    const password = req.body.password;
    if (!login || !password) {
        return res.status(400).end();
    }

    let findUserInDb = false;
    Object.keys(users).forEach(elem => {
        if (login === elem) {
            findUserInDb = true;
        }
    });

    if (findUserInDb) {
        res.json({'response': 200, 'success': 'yes'});
    } else {
        res.json({'response': 200, 'success': 'no'});
    }
});


app.get('*', (req, res) => {
    res.send('404');
});


const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`App start on port ${port}`);
});

