const { DEV_ENV } = require('../webpack.constants');

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
    }
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
