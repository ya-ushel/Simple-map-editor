const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: 5});
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
                loader: 'happypack/loader?id=jsx',
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'client')
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
        createHappyPlugin('jsx', ['react-hot!babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0']),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: ['bundle.js']
        })
    ],
    node: {
        net: 'empty',
        dns: 'empty'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        root: [path.resolve('./client/')]
    },
    watch: true
};

function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        threadPool: happyThreadPool
    });
}