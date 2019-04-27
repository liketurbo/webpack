const { DEV_ENV } = require('../webpack.constants');
const TerserPlugin = require('terser-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const scripts = env => {
  const config = {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
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
    plugins:
      env === DEV_ENV
        ? []
        : [
            new ScriptExtHtmlWebpackPlugin({
              defaultAttribute: 'async'
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
