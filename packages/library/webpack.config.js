const path = require('path');
const HappyPack = require('happypack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: {
    lib: path.join(__dirname, 'src', 'random-string.js')
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
        test: /\.js?$/,
        loader: 'happypack/loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new HappyPack({
      loaders: ['babel-loader']
    }),
    new CleanWebpackPlugin()
  ]
};

module.exports = config;
