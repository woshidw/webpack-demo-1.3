const HtmlWebpackPlugin = require("html-webpack-plugin"); //添加
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //添加
const path = require("path");

const base = require("./webpack.config.base.js");

module.exports = {
  ...base, //把base所有属性抄过来
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
        ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
