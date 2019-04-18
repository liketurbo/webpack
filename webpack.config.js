const merge = require('webpack-merge');

const devServer = require('./webpack.config.d/webpack.server');
const developmentConfig = require('./webpack.config.d/webpack.development');
const commonConfig = require('./webpack.config.d/webpack.common');
const productionConfig = require('./webpack.config.d/webpack.production');
const { PROD_ENV, DEV_ENV } = require('./webpack.config.d/webpack.constants');

module.exports = (_, { mode }) => {
  if (mode === 'development') {
    return merge(commonConfig(DEV_ENV), devServer, developmentConfig);
  }
  return merge(commonConfig(PROD_ENV), productionConfig);
};
