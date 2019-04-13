const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SRC, DIST } = require('./webpack.constants');

const common = {
  /**
   * Stop on the first error
   */
  bail: true,
  /**
   * Entries have to resolve to files! They rely on Node
   * convention by default so if a directory contains *index.js*,
   * it resolves to that.
   */
  entry: {
    app: `${SRC}/index.js`,
    lib: ['react', 'react-dom']
  },
  output: {
    filename: '[name].[contenthash].js',
    path: DIST
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`
    }),
    new webpack.HashedModuleIdsPlugin() // so that file hashes don't change unexpectedly
  ]
};

module.exports = common;
