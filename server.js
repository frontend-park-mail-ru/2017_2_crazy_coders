'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const uuid = require('uuid/v4');

const app = express();

const routes = [
    '/',
    '/signin',
    '/signup',
    '/menu',
    '/play',
    '/about',
    '/score',
];

routes.forEach(path => {
    app.use(path, express.static('public/static'));
});
app.use(express.static('public/'));
app.use(express.static('public/static/js'));

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`App start on port ${port}`);
});