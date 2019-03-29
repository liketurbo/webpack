const path = require('path');
const merge = require('lodash/merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

const commonConfig = {
  // Entries have to resolve to files! They rely on Node
  // convention by default so if a directory contains *index.js*,
  // it resolves to that.
  bail: true, // stop on the first error,
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new FaviconsWebpackPlugin(
      path.join(__dirname, 'src/assets/img/icon-4017417_640.png')
    )
  ]
};

const productionConfig = commonConfig;

const developmentConfig = {
  devServer: {
    // Enable history API fallback so HTML5 History API based
    // routing works. Good for complex setups.
    historyApiFallback: true,
    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || '0.0.0.0';
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT // Defaults to 8080
  }
};

module.exports = (_, { mode }) => {
  if (mode === 'development') {
    return merge(commonConfig, developmentConfig);
  }
  return merge(commonConfig, productionConfig);
};
