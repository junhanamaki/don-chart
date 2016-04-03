const webpack = require('webpack');
const resolve = require('path').resolve;

new webpack.ProvidePlugin({
  jQuery: "jquery",
});

const configurations = {
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
    entry: resolve(__dirname, 'src/index.js'),
    output: {
      path: resolve(__dirname, 'example/js'),
      filename: 'don-chart.js'
    },
    module: {
      preLoaders:[
        { loader: 'eslint', test: /\.js$/, exclude: /node_modules/ }
      ],
      loaders: [
        { loader: 'babel', test: /\.js$/, exclude: /node_modules/ }
      ]
    },
    devtool: 'inline-source-map'
  }
};

module.exports = configurations[process.env.NODE_ENV || 'development'];
