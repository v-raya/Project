const { env, output } = require('../configuration.js')

module.exports = {
  test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      publicPath: env.RAILS_RELATIVE_URL_ROOT ? env.RAILS_RELATIVE_URL_ROOT + output.publicPath : output.publicPath,
      name: env.NODE_ENV === 'production' ? '[name]-[hash].[ext]' : '[name].[ext]'
    }
  }]
}
