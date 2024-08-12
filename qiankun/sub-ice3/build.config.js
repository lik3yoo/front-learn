module.exports = {
  define: {
    env: process.env.NODE_ENV,
  },
  plugins: [
    [
      './plugins/build-plugin-qiankun',
      {}
    ]
  ]
}