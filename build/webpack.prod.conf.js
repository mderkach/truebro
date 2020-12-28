const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const BaseWebpackConfig = require('./webpack.base.conf');
const TerserPlugin = require('terser-webpack-plugin');
const CssNano = require('cssnano');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const buildWebpackConfig = merge(BaseWebpackConfig, {
  // BUILD config
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 2021,
          module: true,
          sourceMap: false, // Must be set to true if using source-maps in production
          terserOptions: {
            compress: {
              drop_console: false,
            },
            output: {
              comments: false,
            },
          },
          parallel: true,
          cache: true,
        },
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: CssNano,
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendorJs: {
          name: 'vendor-js',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
        vendorStyles: {
          name: 'app',
          test: /src[\\/]scss/,
          chunks: 'all',
          enforce: true,
        },
        pages: {
          name(module, chunks) {
            return chunks.map((item) => item.name).join('');
          },
          test(module) {
            return (
              module.resource &&
              module.resource.endsWith('.js') &&
              module.resource.includes(`${Path.sep}pages${Path.sep}`)
            );
          },
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new Dotenv({
      path: './.env.prod',
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => `${PATHS.assets}css/${chunk.name.replace('/js/', '/css/')}.css`,
    }),
    new BundleAnalyzerPlugin(),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(buildWebpackConfig);
});
