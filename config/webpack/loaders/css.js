const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')

const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css')
module.exports =
{
  test: /\.css$/,
  use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
}
