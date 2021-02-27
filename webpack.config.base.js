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
    }),
  ],
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "stylus-loader", // compiles Stylus to CSS
          },
        ],
      },

      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader", //把js字符串转换成style标签
          "css-loader", //把css代码转换成js字符串
          {
            loader: "sass-loader", //把sass的代码转换成css的代码
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
};
