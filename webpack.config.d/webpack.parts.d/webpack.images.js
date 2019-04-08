const images = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 15000,
            fallback: {
              loader: 'file-loader',
              options: {
                name: '[hash]'
              }
            }
          }
        }
      ]
    }
  };

  return config;
};

module.exports = images;
