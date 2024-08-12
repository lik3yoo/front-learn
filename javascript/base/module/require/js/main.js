(function () {
	require.config({
		baseUrl: 'js/',
		paths: {
			jquery: './libs/jquery',
			dataService: './modules/dataService',
			alerter: './modules/alerter',
		}
	})
	require(['alerter'], function (alerter) {
		alerter.showMsg()
	})
})()