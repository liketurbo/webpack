const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const { DEV_ENV } = require('./webpack.constants');

exports.styles = env => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          /**
           * modules: true - ensure that each class globally unique
           */
          use: [
            env === DEV_ENV ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            env === DEV_ENV
              ? {
                  loader: 'postcss-loader',
                  options: {
                    plugins: []
                  }
                }
              : {
                  loader: 'postcss-loader',
                  options: {
                    plugins: [
                      autoprefixer({
                        browsers: ['last 2 version']
                      })
                    ]
                  }
                }
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
};
