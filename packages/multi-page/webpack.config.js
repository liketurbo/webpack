const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.join(__dirname, 'src'),
  output: {
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
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = config;
