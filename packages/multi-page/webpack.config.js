const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');

const page = ({
  path = '',
  template = require.resolve('html-webpack-plugin/default_index.ejs'),
  title,
  entry,
  chunks
}) => ({
  entry,
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${path && path + '/'}index.html`,
      template,
      title,
      chunks
    })
  ]
});

const config = {
  output: {
    path: path.join(__dirname, 'dist')
  }
};

module.exports = () => {
  const pages = [
    page({
      title: 'Webpack demo',
      entry: { app: path.join(__dirname, 'src', 'index.js') },
      chunks: ['another', 'vendor']
    }),
    page({
      title: 'Another demo',
      path: 'another',
      entry: { another: path.join(__dirname, 'src', 'another.js') },
      chunks: ['another', 'vendor']
    })
  ];

  return pages.map(page => merge(config, page));
};
