const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.ts/,
      loader: 'ts-loader',
    }]
  },
  resolve: {
    alias: {
      "echarts": path.join(__dirname, 'libs', 'echarts')
    },
    extensions: ['.ts', '.json', '.js', '.jsx']
  },
  devtool: 'source-map',
};