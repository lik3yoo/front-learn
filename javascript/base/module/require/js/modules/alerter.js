define(['dataService', 'jquery'], function (dataService, $) {
	let name = 'Tom'
	function showMsg() {
		alert(dataService.getMsg() + ',' + name)
		console.log($('.test'))
	}
	return {
		showMsg
	}
})