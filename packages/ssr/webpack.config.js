/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const config = {
  entry: {
    index: path.join(__dirname, 'src', 'ssr.tsx')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader'
      }
    ]
  }
};

module.exports = config;
