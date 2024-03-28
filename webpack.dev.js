const path = require("path");
const defaultConfig = require("./webpack.config");

module.exports = {
	...defaultConfig,
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 9000,
	},
};