const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const { PROD_ENV } = require('./webpack.constants');

const productionConfig = merge(parts.styles(PROD_ENV), {});

module.exports = productionConfig;
