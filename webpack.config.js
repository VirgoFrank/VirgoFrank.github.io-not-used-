const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '.'),
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
      rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
              test: /\.s[ac]ss$/,
              use: ['style-loader','css-loader', 'sass-loader']
            },
            {
              test: /\.less$/,
              use: ['style-loader','css-loader', 'less-loader']
            },
            {
              test: /\.stylus$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../',
                    hmr: process.env.NODE_ENV === 'development',
                  },
                },
                'css-loader', 'stylus-loader'
              ],
            },
            {
              test: /\.html$/,
              use: ['raw-loader']
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    })
  ]
};