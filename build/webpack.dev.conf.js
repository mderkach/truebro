const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BaseWebpackConfig = require('./webpack.base.conf.js');

const devWebpackConfig = merge(BaseWebpackConfig, {
  // DEV config
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    compress: true,
    contentBase: BaseWebpackConfig.externals.paths.dist,
    port: 8080,
    overlay: {
      warnings: true,
      errors: true,
    },
    watchContentBase: true,
    watchOptions: {
      poll: true,
    },
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/',
        notify: false,
      },
      {
        reload: false,
      },
    ),
    new Dotenv({
      path: './.env',
    }),
    new Webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig);
});
