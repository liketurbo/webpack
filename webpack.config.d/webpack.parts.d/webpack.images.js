const images = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 25000
          }
        }
      ]
    }
  };

  return config;
};

module.exports = images;
