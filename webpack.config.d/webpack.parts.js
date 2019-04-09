const styles = require('./webpack.parts.d/webpack.styles');
const scripts = require('./webpack.parts.d/webpack.scripts');
const images = require('./webpack.parts.d/webpack.images');
const fonts = require('./webpack.parts.d/webpack.fonts');

exports.styles = env => styles(env);
exports.scripts = env => scripts(env);
exports.images = env => images(env);
exports.fonts = env => fonts(env);
