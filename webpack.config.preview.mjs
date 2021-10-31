import { join } from 'path';
import HtmlPlugin from 'html-webpack-plugin';
import { currentDir } from './webpack.config.mjs';

export default {
  mode: 'development',
  entry: './src/preview/index.ts',
  output: {
    path: join(currentDir, 'preview'),
    filename: 'bundle.[fullhash].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  module: {
    rules: [{ test: /\.ts$/, use: ['babel-loader'] }],
  },
  plugins: [
    new HtmlPlugin({
      template: './src/preview/index.html',
      inject: 'body',
      favicon: './src/preview/favicon.ico',
    }),
  ],
};
