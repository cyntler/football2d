import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';

export const currentDir = dirname(fileURLToPath(import.meta.url));

export const alias = {
  '@src': join(currentDir, '/src'),
};

export default {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: join(currentDir, 'lib'),
    filename: 'index.js',
    library: {
      type: 'commonjs',
    },
    clean: true,
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    alias,
  },
  module: {
    rules: [{ test: /\.ts$/, use: ['babel-loader'] }],
  },
};
