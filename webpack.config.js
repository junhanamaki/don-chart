const webpack = require('webpack');
const resolve = require('path').resolve;

new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery'
});

const conf = {

  production: {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'don-chart.min.js'
    },
    module: {
      loaders: [
        { loader: 'babel', test: /\.js$/, exclude: /node_modules/ }
      ]
    },
    externals: {
      jquery: "jQuery"
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
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
        { loader: 'babel', test: /\.js$/, exclude: /node_modules/ }
      ]
    },
    externals: {
      jquery: "jQuery"
    },
    devtool: 'hidden-source-map'
  },

  dev_server: {
    entry: resolve(__dirname, 'example/index.js'),
    output: {
      path: resolve(__dirname, 'example/js'),
      filename: 'bundle.js'
    },
    module: {
      preLoaders:[
        { loader: 'eslint', test: /\.js$/, exclude: /node_modules/ }
      ],
      loaders: [
        { loader: 'babel', test: /\.js$/, exclude: /node_modules/ }
      ]
    },
    externals: {
      jquery: "jQuery"
    },
    devtool: 'inline-source-map'
  }

};

module.exports = conf[process.env.NODE_ENV || 'development'];
