const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config')

let devConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map"
}

module.exports = merge(commonConfig, devConfig)