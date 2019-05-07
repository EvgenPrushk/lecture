var path = require('path');

module.exports = {

    entry: path.join(__dirname, 'src/app.js'),
    output: {
        filename: './app.js',
        path: path.join(__dirname, 'dist/')
    },
    module: {
        loaders: [
                { test: /\.html$/, loader: 'html-loader'},
                { test: /\.css$/, loader: ['style-loader', 'style-loader'] }
        ]
    }
};