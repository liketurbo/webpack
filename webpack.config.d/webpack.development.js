const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const developmentConfig = {
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
