const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
process.noDeprecation = true;

module.exports = {
	context: __dirname,

	entry: 	{
		bundle: './public/static/js/main.js',
		styles:'./public/static/css/main.scss',
		test: ['chai', __dirname + '/test/test.js']
	},

	output: {
		filename: '[name].js',
		path: __dirname + '/public/static/js/'
	},

	resolve: {
		extensions: ['.ts', '.tsx', ".js", ".json"],
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
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
					compact: false
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader', use: [
						{loader: 'css-loader', options: {minimize: true}}
					]
				})
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
			},
			{
				test: /\.(png|svg|jpg|gif|jpeg)$/,
                loader: "file-loader?publicPath=../&name=../img/[hash].[ext]"
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
		]
	},


	plugins: [
		new ExtractTextPlugin('[name].css', {
			allChunks: true
		}),
	],
};
