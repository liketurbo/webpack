const merge = require('webpack-merge');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const parts = require('./webpack.parts');
const { PROD_ENV, SRC } = require('./webpack.constants');

const production = merge(parts.styles(PROD_ENV), {
  plugins: [
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new FaviconsWebpackPlugin(`${SRC}/assets/imgs/icon-4017417_640.png`)
  ]
});

module.exports = production;
