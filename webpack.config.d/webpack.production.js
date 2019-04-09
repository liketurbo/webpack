const merge = require('webpack-merge');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const parts = require('./webpack.parts');
const { PROD_ENV, SRC } = require('./webpack.constants');

const production = merge(
  parts.styles(PROD_ENV),
  parts.scripts(PROD_ENV),
  parts.images(PROD_ENV),
  parts.fonts(PROD_ENV),
  {
    plugins: [
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async'
      }),
      new FaviconsWebpackPlugin({
        logo: `${SRC}/assets/images/icon.png`,
        prefix: 'icons/'
      })
    ]
  }
);

module.exports = production;
