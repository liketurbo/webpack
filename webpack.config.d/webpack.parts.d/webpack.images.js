const { DEV_ENV } = require('../webpack.constants');

const images = env => {
  const config = {
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                fallback: {
                  loader: 'responsive-loader',
                  options: {
                    name: env === DEV_ENV ? '[name]-[width]' : '[hash]',
                    adapter: require('responsive-loader/sharp'),
                    sizes: [320, 600, 960, 1280, 1920],
                    placeholder: true,
                    placeholderSize: 50
                  }
                }
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75
                }
              }
            }
          ]
        }
      ]
    }
  };

  return config;
};

module.exports = images;
