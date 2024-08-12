const path = require('path')

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'output.js',
		path: path.resolve(__dirname, 'dist'),
		library: {
			type: "var",
			// name: 'MyLibrary',
		}
	},
	resolve: {
		extensions: [
			'.js'
		]
	}
}