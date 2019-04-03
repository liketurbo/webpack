const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
            { loader: 'css-loader', options: { modules: true } },
            'postcss-loader'
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
