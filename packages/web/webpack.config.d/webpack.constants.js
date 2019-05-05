const path = require('path');

exports.DEV_ENV = 'DEV_ENV';
exports.PROD_ENV = 'PROD_ENV';

exports.SRC = path.join(__dirname, '../src');
exports.DIST = path.join(__dirname, '../dist');
exports.DEPENDENCIES = [path.join(__dirname, '../node_modules')];

exports.HOST = process.env.HOST || '127.0.0.1';
exports.PORT = process.env.PORT || 8080;
