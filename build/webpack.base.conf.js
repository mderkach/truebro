const Path = require('path');
const Fs = require('fs');
const Glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssNano = require('cssnano');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');

const isProd = function () {
  if (process.argv.includes('production')) {
    return true;
  }

  return false;
};

// Main const
const PATHS = {
  src: Path.join(__dirname, '../src'),
  build: Path.join(__dirname, '../build'),
  dist: Path.join(__dirname, '../dist'),
  pages: Path.join(__dirname, '../src/views/pages'),
  assets: 'assets/',
};

const PAGES_DIR = `${PATHS.src}/views/`;
const PAGES = Fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.html'));

// plugins
const plugins = [
  new Dotenv({
    path: isProd() ? './.env.prod' : './.env',
  }),
  // Automatic creation any html pages (Don't forget to RERUN dev server)
  ...PAGES.map(
    (page) =>
      new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        filename: `./${page}`,
      }),
  ),
  // load svg sprite
  new SpriteLoaderPlugin({
    plainSprite: true,
  }),
  // copy assets to dist
  new CopyWebpackPlugin({
    patterns: [
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: '' },
    ],
  }),
];

if (isProd()) {
  plugins.push(
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => `${PATHS.assets}css/${chunk.name.replace('/js/', '/css/')}.css`,
    }),
    new BundleAnalyzerPlugin(),
  );
}

// BASE config
module.exports = {
  mode: isProd() ? 'production' : 'development',
  externals: {
    paths: PATHS,
  },
  entry: `${PATHS.src}/main.js`,
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.svg(\?.*)?$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              publicPath: `${PATHS.assets}img/svg/`,
            },
          },
          // '@svgr/webpack',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false },
              ],
            },
          },
          'svg-transform-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          outputPath: `./${PATHS.assets}`,
          publicPath: isProd() ? '../' : './assets/',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProd()
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: (resourcePath, context) => {
                    return Path.relative(Path.dirname(resourcePath), context) + '/';
                  },
                },
              }
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              sourceMap: true,
              modules: {
                mode: 'local',
                exportLocalsConvention: 'asIs',
                auto: resourcePath => resourcePath.endsWith('.local.scss'),
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                config: `${PATHS.build}/postcss.config.js`,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 2018,
          module: true,
          sourceMap: false, // Must be set to true if using source-maps in production
          compress: {
            drop_console: true,
            drop_debugger: true,
            ecma: 2018,
            module: true,
          },
          format: {
            comments: false,
            indent_level: 2,
          },
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
  resolve: {
    alias: {
      '~s': PATHS.src,
      '~v': `${PATHS.src}/views`,
      '~u': `${PATHS.src}/utils`,
      '~cmp': `${PATHS.src}/components`,
      '~m': `${PATHS.src}/modules`,
    },
    extensions: ['.js', '.jsx', '.mjs', '.es6', '.scss'],
  },
  plugins: plugins,
};
