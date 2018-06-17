import { resolve } from 'path';
import { Configuration } from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: {
    ts: './src/ts/index.tsx',
    js: './src/js/index.jsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
      rules: [
        {  test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
        {  test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      ]
  },
  resolve: {
    extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'JS TODO',
      filename: 'js-todo.html',
      chunks: ['js'],
    }),
    new HtmlWebpackPlugin({
      title:'TS TODO',
      filename: 'ts-todo.html',
      chunks: ['ts'],
    })
  ]
};

export default config;
