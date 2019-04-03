const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const { DEV_ENV } = require('./webpack.constants');

const developmentConfig = merge(parts.styles(DEV_ENV), {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      }
    ]
  },
  plugins: [new CaseSensitivePathsPlugin(), new FriendlyErrorsWebpackPlugin()]
});

module.exports = developmentConfig;
