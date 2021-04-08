const Path = require('path');
const { merge } = require('webpack-merge');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const BaseWebpackConfig = require('./webpack.base.conf');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const PATHS = {
  src: Path.join(__dirname, '../src'),
  build: Path.join(__dirname, '../build'),
  dist: Path.join(__dirname, '../dist'),
  pages: Path.join(__dirname, '../src/views/pages'),
  assets: 'assets/',
};

const buildWebpackConfig = merge(BaseWebpackConfig, {
  // BUILD config
  mode: 'production',
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        minify: true,
        sourcemap: false,
      }),
      new CssMinimizerPlugin({
        parallel: true,
        minify:  CssMinimizerPlugin.cssnanoMinify,
        minimizerOptions: {
          preset: [
            'advanced',
            {
              discardComments: { removeAll: true },
            },
          ],
          processorOptions: {
            parser: 'postcss-scss',
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor-${packageName.replace('@', '')}`;
          },
        },
        vendorStyles: {
          name: 'app',
          test: /src[\\/]scss/,
          chunks: 'all',
          enforce: true,
        },
        app: {
          name: 'app',
          enforce: true,
          maxSize: 249856,
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new Dotenv({
      path: './.env.prod',
    }),
    // new CleanWebpackPlugin({
    //   verbose: true,
    // }),
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => `${PATHS.assets}css/${chunk.name.replace('/js/', '/css/')}.css`,
    }),
    new BundleAnalyzerPlugin(),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(buildWebpackConfig);
});
