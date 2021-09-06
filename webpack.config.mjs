import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import HtmlPlugin from 'html-webpack-plugin';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'development',
  entry: './src/preview/index.ts',
  output: {
    path: join(currentDir, 'preview'),
    filename: 'bundle.[fullHash].js',
    publicPath: '/',
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
