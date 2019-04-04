const path = require('path');

const devServer = {
  /**
   * Enable history API fallback so HTML5 History API based
   * routing works. Good for complex setups.
   */
  historyApiFallback: true,
  /**
   * Display only errors to reduce the amount of output.
   */
  stats: 'errors-only',
  /**
   * Parse host and port from env to allow customization.
   *
   * If you use Docker, Vagrant or Cloud9, set
   * host: options.host || '0.0.0.0';
   *
   * 0.0.0.0 is available to all network devices
   * unlike default `localhost`.
   */
  host: process.env.HOST, // Defaults to `localhost`
  port: process.env.PORT, // Defaults to 8080
  watchOptions: {
    /**
     * Delay the rebuild after the first change
     */
    aggregateTimeout: 300,
    /**
     * Poll using interval (in ms, accepts boolean too)
     */
    poll: 1000,
    ignored: [path.join(__dirname, 'node_modules')]
  }
};

module.exports = {
  devServer
};
