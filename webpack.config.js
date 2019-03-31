const merge = require('webpack-merge');

const devServer = require('./webpack.config.d/webpack.server');
const developmentConfig = require('./webpack.config.d/webpack.development');
const commonConfig = require('./webpack.config.d/webpack.common');
const productionConfig = require('./webpack.config.d/webpack.production');

module.exports = (_, { mode }) => {
  if (mode === 'development') {
    return merge(commonConfig, devServer, developmentConfig);
  }
  return merge(commonConfig, productionConfig);
};
