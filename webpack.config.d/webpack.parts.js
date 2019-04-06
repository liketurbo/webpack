const styles = require('./webpack.parts.d/webpack.styles');
const scripts = require('./webpack.parts.d/webpack.scripts');

exports.styles = env => styles(env);
exports.scripts = env => scripts(env);
