/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: {
    lib: path.join(__dirname, 'src', 'random-string.ts')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'RandomString',
    libraryTarget: 'var' // Default
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};

module.exports = config;
