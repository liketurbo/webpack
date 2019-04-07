const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const autoprefixer = require('autoprefixer');
const {
  DEV_ENV,
  PROD_ENV,
  SRC,
  DEPENDENCIES
} = require('../webpack.constants');

const styles = env => {
  const config = {
    module: {
      rules: [
        {
          test: /\.css$/,
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

  /**
   * Additional production config
   */
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

  /**
   * Additional development config
   */
  if (env === DEV_ENV) {
    config.module.rules.push({
      test: /\.css$/,
      enforce: 'pre',
      loader: 'postcss-loader',
      options: {
        plugins: () => [
          require('stylelint')({
            // Ignore node_modules CSS
            ignoreFiles: `${DEPENDENCIES[0]}/**/*.css`
          })
        ]
      }
    });
  }

  return config;
};

module.exports = styles;
