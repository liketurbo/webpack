/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const config = {
  entry: {
    app: path.join(__dirname, 'src', 'ssr.tsx')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[contenthash].js',
    libraryTarget: 'umd'
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
