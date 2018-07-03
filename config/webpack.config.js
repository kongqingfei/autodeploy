const path = require('path')
const externalsDep = require('externals-dependencies')
const dest = '../dist'

module.exports = {
  entry: './src/server/app.js',
  target: 'node',
  mode: 'development',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, dest),
  },
  // externals: [externalsDep()],
};