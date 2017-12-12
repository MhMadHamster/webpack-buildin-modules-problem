const path = require("path");
const webpack = require("webpack");

module.exports = {
	output: {
		path: path.join(__dirname, "build"),
		filename: "[name].js",
	},
	entry: {
		"a": "./modules/a",
		"b": "./modules/b",
		"c": "./modules/c",
		"common-scripts": [
			"./modules/common",
		],
		"vendor-scripts": [
			"mobx",
		],
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "common-scripts",
			minChunks(module, count) {
				return module.resource && (/lodash/.test(module.resource) && count >= 3);
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor-scripts",
			chunks: ["a", "b", "c"],
			minChunks: Infinity,
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "manifest",
			minChunks: Infinity,
		}),
	],
};