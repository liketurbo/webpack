const { DEV_ENV } = require('../webpack.constants');

const scripts = env => {
  const config = {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ]
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
