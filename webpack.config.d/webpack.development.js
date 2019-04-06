const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const { DEV_ENV } = require('./webpack.constants');

const development = merge(parts.styles(DEV_ENV), parts.scripts(DEV_ENV), {
  plugins: [new CaseSensitivePathsPlugin(), new FriendlyErrorsWebpackPlugin()]
});

module.exports = development;
