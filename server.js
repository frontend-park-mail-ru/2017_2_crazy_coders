'use strict';

const Http = require('./FrontHttp');
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
    const user = {
        'username': login,
        'email': email,
        'password': password
    };

    Http.Post('http://82.202.246.5:8080/signUp', user, (request, response) => {
        if(res) {
            console.log('request = ' + req);
            console.log('response = ' + response.email + response.id + response.username);
            res.json({'username': response.username,
                      'email': response.email,
                      'id': response.id});
        } else {
            console.log('request = ' + req);
            console.log('response = ' + response.email + response.id + response.username);
            return res.status(400).json({error: 'User is exists'});
        }

    });

});

app.post('/login', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    if (
        !email || !password ||
        !password.match(/^\S{4,}$/)
    ) {
        return res.status(400).end();
    }

    const user = {
        'email': email,
        'password': password
    };

    Http.Post('http://82.202.246.5:8080/signIn', user, (request, response) => {
        if (res) {
            console.log('request = ' + req);
            console.log('response = ' + response.username + response.id + response.email);
            res.json({
                'username': response.username,
                'email': response.email,
                'id': response.id
            });
        } else {
            console.log('request = ' + req);
            console.log('response = ' + response.email + response.id + response.username);
            return res.status(400).json({error: 'User is not exists'});
        }
    });

});

app.get('/isauth', (req, res) => {

    Http.Get('http://82.202.246.5:8080/getProfile', (request, response) => {
        if(response) {
            res.set('Content-Type', 'application/json; charset=utf8');
            res.json({'login': response.username,
                      'email': response.email,
                      'id': response.id,});
        } else {
            res.json({'login': '',
                      'email': '',
                      'id': 0,});
        }
    });


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