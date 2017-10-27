const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: "source-map",

    entry: {
        main: './public/main.js',
    },

    output: {
        filename: './bundle.js',
        path: __dirname + '/public'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './public/index.html'
        }),
    ],
};
