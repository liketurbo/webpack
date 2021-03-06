const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const { DEV_ENV } = require('./webpack.constants');

const development = merge(
  {
    devtool: 'inline-source-map'
  },
  parts.styles(DEV_ENV),
  parts.scripts(DEV_ENV),
  parts.images(DEV_ENV),
  parts.fonts(DEV_ENV),
  {
    plugins: [new CaseSensitivePathsPlugin(), new FriendlyErrorsWebpackPlugin()]
  }
);

module.exports = development;
