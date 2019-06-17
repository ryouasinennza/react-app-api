const prodConfig = require('./webpack.prod.config');
const devConfig = require('./webpack.dev.config');

module.exports = (env, options) => {
  console.log('options.mode ',options.mode );
  if (options.mode === 'production') {
    return prodConfig;
  } else {
    return devConfig;
  }
};