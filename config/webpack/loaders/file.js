const { environment } = require('@rails/webpacker')

const publicPath = environment.config.output.publicPath
const fileLoader = environment.loaders.get('file')

fileLoader.use[0].options.publicPath = process.env.RAILS_RELATIVE_URL_ROOT ? process.env.RAILS_RELATIVE_URL_ROOT + publicPath : publicPath

module.exports = fileLoader
