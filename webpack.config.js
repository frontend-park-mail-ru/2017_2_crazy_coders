const path = require('path');
const phaserRoot        = path.join(__dirname, 'node_modules/phaser/build/custom/');
const phaserPath        = path.join(phaserRoot, 'phaser-split.js');
const pixiPath          = path.join(phaserRoot, 'pixi.js');
const p2Path            = path.join(phaserRoot, 'p2.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// function exposeRules(modulePath, name) {
//     return {
//         test: (path) => modulePath === path,
//         loader: 'expose-loader',
//         options: name
//     };
// }

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

    resolve: {
        extensions: [ '.ts', '.tsx', ".js", ".json"],
        // alias: {
        //     pixi:   pixiPath,     // alias for 'pixi' library
        //     phaser: phaserPath,   // alias for 'phaser' library
        //     p2:     p2Path,       // alias for 'p2' library
        // }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
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
            },
            // exposeRules(pixiPath, 'PIXI'),     // adds `PIXI` to the global object (window)
            // exposeRules(p2Path, 'p2'),         // adds `p2` to the global object (window)
            // exposeRules(phaserPath, 'Phaser'), // adds `Phaser` to the global object (window)
        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './public/index.html'
        }),
    ],
};
