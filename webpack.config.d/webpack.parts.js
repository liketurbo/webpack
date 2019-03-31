exports.css = {
  module: {
    rules: [
      {
        test: /\.css$/,
        /**
         * modules: true - ensure that each class globally unique
         */
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } }
        ]
      }
    ]
  }
};
