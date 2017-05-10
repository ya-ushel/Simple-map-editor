const express = require('express');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const wConfig = require('../webpack.config');

const compiler = webpack(wConfig);

const app = express();
const indexTemplate = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8');

if (process.env.NODE_ENV && process.env.NODE_ENV === 'dev'){
        app.use(webpackDevMiddleware(compiler, {
            publicPath: wConfig.output.publicPath,
            noInfo: true
        }));
        app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.resolve(__dirname, '../public'), {
    etag: false,
    maxAge: 1800000
}));


app.get('/*', (req, res) => {
    return res.send(indexTemplate);
});

const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log('Magic happens on port ' + port);