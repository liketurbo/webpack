const { DEV_ENV } = require('../webpack.constants');
const TerserPlugin = require('terser-webpack-plugin');
const HappyPack = require('happypack');

const scripts = env => {
  const config = {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'happypack/loader'
        },
        { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.tsx', '.jsx', '.ts', '.js']
    },
    optimization:
      env === DEV_ENV
        ? {}
        : {
            minimizer: [
              new TerserPlugin({
                terserOptions: {
                  output: {
                    comments: false
                  }
                }
              })
            ]
          },
    plugins: [
      new HappyPack({
        loaders: ['babel-loader']
      })
    ]
  };

  if (env === DEV_ENV) {
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      options: {
        emitWarning: true
      }
    });
  }

  return config;
};

module.exports = scripts;
