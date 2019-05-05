const webpack = require('webpack');
const merge = require('webpack-merge');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const parts = require('./webpack.parts');
const { PROD_ENV, SRC, DIST } = require('./webpack.constants');

const production = merge(
  parts.styles(PROD_ENV),
  parts.scripts(PROD_ENV),
  parts.images(PROD_ENV),
  parts.fonts(PROD_ENV),
  {
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
            test: /[\\/]node_modules[\\/](?!bootstrap)/, // all node modules except bootstrap css
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `${packageName.replace('@', '')}`;
            }
          }
        }
      }
    },
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000 // in bytes
    },
    plugins: [
      new FaviconsWebpackPlugin({
        logo: `${SRC}/assets/images/icon.png`,
        prefix: 'icons/'
      }),
      new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
      new CleanWebpackPlugin(),
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true
      })
    ]
  }
);

module.exports = production;
