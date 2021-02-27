const HtmlWebpackPlugin = require('html-webpack-plugin');//添加
const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/index.js', //默认入口文件
    output: {//输出
      path: path.resolve(__dirname, 'dist'),//默认定位,文件的目标路径
      filename: 'index.[contenthash].js', //。[name]可以改。
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'woshisb',
    template: 'src/assets/index.html'
  })],
};
//总的意思是默认把src下的index.js转译后放到dist下的main.js