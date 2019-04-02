exports.styles = {
  module: {
    rules: [
      {
        test: /\.css$/,
        /**
         * modules: true - ensure that each class globally unique
         */
        use: [
          'style-loader',
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
  }
};
