const config = require('./webpack.config.js');

config.output.path = resolve(__dirname, 'sample/javascript');

module.exports = config;