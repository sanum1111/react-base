const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "./src/app.js"),
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].[contenthash].bundle.js",
		chunkFilename: "[name].[contenthash].bundle.js",
		clean: true,
	},
	mode: "development",
	resolve: {
		extensions: [
			".js",
			".jsx",
			".json",
		],
		alias: {
			config: path.resolve(__dirname, "./src/config"),
			components: path.resolve(__dirname, "./src/components"),
			assets: path.resolve(__dirname, "./src/assets"),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, "./dist", "index.html"),
			hash: true,
			inject: false,
			scriptLoading: "blocking",
			minify: false,
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$|\.jsx$/,
				include: [path.resolve(`${__dirname}/src`), /node_modules\/(?=(swiper|dom7)\/).*/],
				exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /.test.js(x)?$/],
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"],
			},
		],
	},
};
