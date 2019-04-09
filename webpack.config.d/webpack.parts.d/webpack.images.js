const images = () => {
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
                  loader: 'file-loader',
                  options: {
                    name: '[hash]'
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
