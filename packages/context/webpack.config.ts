import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: path.resolve(__dirname, 'src'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [new HtmlWebpackPlugin() as any]
};

export default config;
