const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const webpackConfig = require('../../config/webpack.config.js')

const options = {
  contentBase: '../../dist',
  hot: true,
  host: 'localhost',
};

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen(8000, 'localhost', () => {
  console.log('dev server listening on port 8000');
});