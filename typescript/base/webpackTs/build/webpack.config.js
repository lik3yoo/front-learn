const htmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

let config = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /tsx?$/i,
        use: "ts-loader",
        exclude: [/node_modules/,]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../template/index.html')
    })
  ]
}

module.exports = config