const path = require('path');
const CSSPlugin = new ExtractTextPlugin('app.css');
const webpack = require('webpack');

module.exports = {
  entry:  path.join(__dirname, 'src/app.js'),
  output: {
    filename: './app.js',
    path: path.join(__dirname, 'dist/'),
    
  },
  module: {
    rules: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.less$/, use: CSSPlugin.extract(['style-loader', 'css-loader']) }
    ]
  },
  plugins: [
   CSSPlugin,
    webpack.optimize.CommonsChunkPlugin('vendor.js')
  ]
};
