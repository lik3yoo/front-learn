const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: __dirname + '../dist'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '../src')
    },
    extensions: [
      ".ts", ".tsx", ".js"
    ]
  },
  stats: {
    errorDetails: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}

module.exports = config