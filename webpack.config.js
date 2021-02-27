const HtmlWebpackPlugin = require('html-webpack-plugin');//添加
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//添加
const path = require('path');



module.exports = {
    mode: 'development',
    entry: './src/index.js', //默认入口文件
    output: {//输出
      path: path.resolve(__dirname, 'dist'),//默认定位,文件的目标路径
      filename: 'index.[contenthash].js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'woshisb',
    template: 'src/assets/index.html'
  })
],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

