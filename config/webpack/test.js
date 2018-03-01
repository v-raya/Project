const environment = require('./environment')

environment.plugins.get('Manifest').opts.writeToFileEmit = process.env.NODE_ENV !== 'test'
environment.loaders.append('istanbul-instrumenter', {
  test: /\.(js|jsx)$/,
  exclude: [/node_modules/, /test/],
  loader: 'istanbul-instrumenter-loader',
  query: {
    esModules: true
  }
}) /* optional */
module.exports = environment.toWebpackConfig()
