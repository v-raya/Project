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
  },
  module: {
    rules : [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'istanbul-instrumenter-loader',
        query: {
          esModules: true
        }
      }
    ]
  }

});
