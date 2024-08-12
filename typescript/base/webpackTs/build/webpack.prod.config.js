const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

let devConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = merge(commonConfig, devConfig)