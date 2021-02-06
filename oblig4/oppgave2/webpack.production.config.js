const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'cheap-source-map',
}); 