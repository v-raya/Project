// Note: You must restart bin/webpack-dev-server for changes to take effect

const merge = require('webpack-merge')
const sharedConfig = require('./shared.js')

module.exports = merge(sharedConfig, {
  devtool: 'sourcemap',
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'istanbul-instrumenter-loader',
      query: {
        esModules: true
      }
    }
    ]
  }
})



