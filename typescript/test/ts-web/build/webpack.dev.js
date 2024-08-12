const commonConfig = require("./webpack.common")
const { merge } = require('webpack-merge')
const devConfig = {

}

const mergeConfig = merge(commonConfig, devConfig)
module.exports = mergeConfig