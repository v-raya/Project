const { environment } = require('@rails/webpacker')

const erb = require('./loaders/erb')
environment.loaders.append('erb', erb)

const fileLoader = require('./loaders/file')
environment.loaders.append('file', fileLoader)

module.exports = environment
