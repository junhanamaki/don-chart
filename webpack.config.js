const webpack = require('webpack');
const resolve = require('path').resolve;

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: PRODUCTION ? 'don-chart.min.js' : 'don-chart.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      { loader: 'babel', test: /\.js$/, exclude: /node_modules/ }
    ]
  },
  externals: {
    jquery: "jQuery"
  },
  plugins: PRODUCTION
    ? [
      new webpack.optimize.UglifyJsPlugin()
    ]
    : [],
  devtool: PRODUCTION ? '' : 'source-map'
};
