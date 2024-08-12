const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageName = require("./package.json").name;
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve("./index.jsx"),
  output: {
    library: `${packageName}-[name]`,
    libraryTarget: "umd",
    chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    globalObject: "window",
    // publicPath: "/sub-react/",
  },
  devServer: {
    open: true,
    port: 8000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    hot: false,
    // watchContentBase: false,
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./public/index.html"),
    }),
  ],
};
