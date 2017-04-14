// Note: You must restart bin/webpack-watcher for changes to take effect

const webpack = require('webpack')
const merge = require('webpack-merge')

const sharedConfig = require('./shared.js')

module.exports = merge(sharedConfig.config, {
  devtool: 'sourcemap',

  devServer: {
    port: 5080
  },

  stats: {
    errorDetails: true
  },

  output: {
    pathinfo: true
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
})
