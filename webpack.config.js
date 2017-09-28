const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
/*            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['eslint-loader']
            },*/
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,

                use: [
                    "html-loader"
                ]
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
