const HtmlWebpackPlugin = require('html-webpack-plugin');
// const IS_ENV_PROD = process.env.NODE_ENV === 'production';
const path = require('path');
const resolve = (directory) => path.resolve(__dirname, directory);

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
    open: true,
  },
  devtool: 'eval',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      //fill alias for files
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [resolve('../node_modules')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(js|png|svg|jpg|gif|woff|woff2)$/,
        exclude: [resolve('../node_modules')],
        include: resolve('../src/client/assets'),
        loader: 'url-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
