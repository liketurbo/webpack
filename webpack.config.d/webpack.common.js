const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const parts = require('./webpack.parts');

const commonConfig = merge(parts.styles, {
  /**
   * Entries have to resolve to files! They rely on Node
   * convention by default so if a directory contains *index.js*,
   * it resolves to that.
   */
  entry: {
    app: path.join(__dirname, '../src')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html')
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new FaviconsWebpackPlugin(
      path.join(__dirname, '../src/assets/imgs/icon-4017417_640.png')
    )
  ]
});

module.exports = commonConfig;
