const HtmlWebpackPlugin = require('html-webpack-plugin');

const { SRC, DIST } = require('./webpack.constants');

const common = {
  /**
   * Stop on the first error
   */
  bail: true,
  /**
   * Entries have to resolve to files! They rely on Node
   * convention by default so if a directory contains *index.js*,
   * it resolves to that.
   */
  entry: {
    app: `${SRC}/index.js`
  },
  output: {
    path: DIST,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`
    })
  ]
};

module.exports = common;
