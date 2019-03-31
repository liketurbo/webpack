const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const developmentConfig = {
  /**
   * Fixed bug: cannot resolve fs module
   * https://github.com/webpack-contrib/css-loader/issues/447
   */
  node: {
    fs: 'empty',
    module: 'empty',
    child_process: 'empty',
    readline: 'empty'
  },
  /**
   * Stop on the first error
   */
  bail: true,
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
};

module.exports = developmentConfig;
