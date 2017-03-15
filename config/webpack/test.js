'use strict';

const webpack = require('webpack')
const merge = require('webpack-merge')
const sharedConfig = require('./shared.js')
const path = require('path')
module.exports = merge(sharedConfig.config, {
  entry: './../test/javascript/tests.webpack.js',
  devtool: 'cheap-module-inline-source-map',
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  }
});
