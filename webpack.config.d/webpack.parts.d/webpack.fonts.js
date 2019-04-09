const { DEV_ENV } = require('../webpack.constants');

const fonts = env => {
  const config = {
    module: {
      rules: [
        {
          // Capture eot, ttf, woff, and woff2
          test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'file-loader',
            options: {
              name: env === DEV_ENV ? '[name].[ext]' : 'fonts/[hash].[ext]'
            }
          }
        }
      ]
    }
  };

  return config;
};

module.exports = fonts;
