const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename()
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: loaders()
  },
  plugins: plugins(),
  devtool: devtool()
};

function forProduction() {
  return process.env.NODE_ENV === 'production';
}

function filename() {
  return forProduction() ? 'don-chart.min.js' : 'don-chart.js';
}

function loaders() {
  return forProduction()
    ? [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
    : [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules|src/ },
      { test: /\.js$/, loader: 'babel-istanbul', exclude: /node_modules|test/ }
    ];
}

function plugins() {
  return forProduction()
    ? [new webpack.optimize.UglifyJsPlugin()]
    : [];
}

function devtool() {
  return forProduction() ? '' : 'inline-source-map';
}
