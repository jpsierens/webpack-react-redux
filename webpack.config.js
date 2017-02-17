'use strict';
console.log(console)
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var devServer;

var os = require('os');
var dns = require('dns');
console.log(os.hostname());
new Promise( (resolve,reject) => dns.lookup('tight-timpani.gomix.me', (err,addresses,family) => resolve(addresses)))
    .then((address) =>{console.log(address);return address})
    .then( (address) => new Promise(( resolve, reject) => dns.reverse(address, (err, hostnames) => resolve(hostnames)))) 
    .then((address) =>{console.log( address);return address})
// new Promise( resolve, reject) dns.lookup(os.hostname())).then ((e)=>console.log(e)) 
// Promise.resolve() .then ( () => dns.lookup(os.hostname(), (err,addresses,family) => Promise.resolve(addresses)))
//   .then ((addresses) => console.log(addresses));
new Promise( (resolve,reject) => dns.lookup('tight-timpani.gomix.me', (err,addresses,family) => resolve(addresses)))
    .then((address) =>{console.log(address);return address})
if (process.env.PROJECT_NAME ) {
  devServer = 'webpack-dev-server/client?https://' + process.env.PROJECT_NAME + '.gomix.me';
} else {
  devServer = 'webpack-dev-server/client?https://localhost:3000'
}
module.exports = {
    devtool: 'eval-source-map',
    entry: [
        devServer,
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'
            },
            { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file' }
        ]
    }
};
