const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[contenthash].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CleanWebpackPlugin()
  ]
};

module.exports = config;
