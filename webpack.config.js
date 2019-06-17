let configObj = {};

if (process.env.NODE_ENV === 'production') {
  console.log('prod');
  configObj = require('./webpack.prod.config');
} else {
  console.log('dev');
  configObj = require('./webpack.dev.config');
}

module.exports = configObj;