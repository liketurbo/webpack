const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const autoprefixer = require('autoprefixer');
const { DEV_ENV, PROD_ENV, SRC } = require('../webpack.constants');

const styles = env => {
  const config = {
    module: {
      rules: [
        {
          test: /\.css$/,
          /**
           * modules: true - ensure that each class globally unique
           */
          use: [
            env === DEV_ENV ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.sass$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.styl$/,
          use: ['style-loader', 'css-loader', 'stylus-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  };

  if (env === PROD_ENV) {
    config.module.rules[0].use.push({
      loader: 'postcss-loader',
      options: {
        plugins: [
          autoprefixer({
            browsers: ['last 2 version']
          })
        ]
      }
    });
    config.plugins.push(
      new PurgecssPlugin({
        paths: glob.sync(`${SRC}/**/*`, {
          nodir: true
        })
      })
    );
  }

  return config;
};

module.exports = styles;
