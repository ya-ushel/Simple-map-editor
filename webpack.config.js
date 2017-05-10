const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: {
        bundle: [
            'webpack-hot-middleware/client',
            path.join(__dirname, 'client/index.js'),
        ]
    },
    output: {
        filename: '[name].js',
        path: '/',
        publicPath: 'http://localhost:3000/'
    },
    sassLoader: {
        includePaths: ['sass']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    plugins: ["transform-regenerator"],
                    presets: ["react", "es2015", "stage-0"]
                },
                include: path.resolve(__dirname, 'client'),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap'),
                include: path.resolve(__dirname, 'client/styles'),
                exclude: /node_modules/,
            },
            {
                include: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                exclude: /node_modules/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new webpack.SourceMapDevToolPlugin({
            test: /\.jsx?$/
        }),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('styles.css'),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: ['bundle.js']
        })
    ],
    resolve: {
        modulesDirectories: ['node_modules'],
        root: [path.resolve('./client/')]
    },
    watch: true
};