'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './public/main.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.pug$/,
                loaders: ['pug-loader']
            }
        ]
    }
};