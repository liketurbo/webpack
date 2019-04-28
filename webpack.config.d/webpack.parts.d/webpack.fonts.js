const kebabCase = require('lodash/kebabCase');

const fonts = {
  module: {
    rules: [
      {
        // Capture eot, ttf, woff, and woff2
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name(file) {
              const [, name, ext] = /([-\w]+)\.(\w+)/.exec(file);
              return `${kebabCase(name)}.${ext}`;
            }
          }
        }
      }
    ]
  }
};

module.exports = fonts;
