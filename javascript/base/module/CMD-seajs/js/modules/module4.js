define(function (require, exports, module) {
	var module2 = require('./module2')
	function show() {
		console.log('module4 show()' + module2.msg)
	}
	exports.show = show
	require.async('./module3.js', function (m3) {
		console.log('异步引入模块3 ' + m3.API_KEY)
	})
})