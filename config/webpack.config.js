const path = require('path')
const externalsDep = require('externals-dependencies')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const dest = '../dist'
const src = '../src'

module.exports = {
  entry: './src/server/app.js',
  target: 'node',
  node: {__dirname: true},
  mode: 'development',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, dest),
  },
  // externals: [externalsDep()],
  // externals: ['process'],
  plugins: [
    new CopyWebpackPlugin([{from: path.resolve(__dirname, `${src}/client`), to: path.resolve(__dirname, dest)}]),
  ],
};