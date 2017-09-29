'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const uuid = require('uuid/v4');

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.send('404');
});


const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`App start on port ${port}`);
});