const webpack = require('webpack');
const resolve = require('path').resolve;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const conf = {

  production: {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'don-chart.min.js'
    },
    module: {
      loaders: [
        { loader: 'babel', test: /\.js$/, exclude: /node_modules/ },
        { loader: 'raw', test: /\.html$/, exclude: /node_modules/ },
        { loader: ExtractTextPlugin.extract('style', 'css'), test: /\.css$/, exclude: /node_modules/ }
      ]
    },
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin('don-chart.min.css')
    ]
  },

  development: {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'don-chart.js'
    },
    module: {
      loaders: [
        { loader: 'babel', test: /\.js$/, exclude: /node_modules/ },
        { loader: 'raw', test: /\.html$/, exclude: /node_modules/ },
        { loader: ExtractTextPlugin.extract('style', 'css'), test: /\.css$/, exclude: /node_modules/ }
      ]
    },
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new ExtractTextPlugin('don-chart.css')
    ],
    devtool: 'hidden-source-map'
  },

  dev_server: {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'don-chart.js'
    },
    module: {
      preLoaders:[
        { loader: 'eslint', test: /\.js$/, exclude: /node_modules/ }
      ],
      loaders: [
        { loader: 'babel', test: /\.js$/, exclude: /node_modules/ },
        { loader: 'raw', test: /\.html$/, exclude: /node_modules/ },
        { loader: 'style!css', test: /\.css$/, exclude: /node_modules/ }
      ]
    },
    externals: {
      jquery: 'jQuery'
    },
    devtool: 'inline-source-map'
  }

};

module.exports = conf[process.env.NODE_ENV || 'development'];
