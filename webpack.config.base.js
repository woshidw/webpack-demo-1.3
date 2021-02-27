const HtmlWebpackPlugin = require("html-webpack-plugin"); //添加
const path = require("path");

module.exports = {
  output: {
    //输出
    path: path.resolve(__dirname, "dist"), //默认定位,文件的目标路径
    filename: "index.[contenthash].js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "woshisb",
      template: "src/assets/index.html",
    })

  ],

};
