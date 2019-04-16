const webpack = require('webpack');
const merge = require('webpack-merge');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const parts = require('./webpack.parts');
const { PROD_ENV, SRC, DIST } = require('./webpack.constants');

const production = merge(
  parts.styles(PROD_ENV),
  parts.scripts(PROD_ENV),
  parts.images(PROD_ENV),
  parts.fonts(PROD_ENV),
  {
    output: {
      filename: '[contenthash].js',
      path: DIST
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false
            }
          }
        })
      ],
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
              let packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              );

              if (packageName) {
                packageName = packageName[1];
                // npm package names are URL-safe, but some servers don't like @ symbols
                packageName = packageName.replace('@', '');
              }

              return packageName;
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
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async'
      }),
      new FaviconsWebpackPlugin({
        logo: `${SRC}/assets/images/icon.png`,
        prefix: 'icons/'
      }),
      new CleanWebpackPlugin(),
      new webpack.BannerPlugin({
        banner: new GitRevisionPlugin().version()
      })
    ]
  }
);

module.exports = production;
