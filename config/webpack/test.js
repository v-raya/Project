'use strict';

const webpack = require('webpack')
const merge = require('webpack-merge')   
const sharedConfig = require('./shared.js')

module.exports = merge(sharedConfig.config, {
    entry: './../test/javascript/tests_webpack.js',
    devtool: 'cheap-module-inline-source-map'
});
