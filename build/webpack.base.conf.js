const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

// plugins
const plugins = [
  new HtmlWebpackPlugin({
    template: `${PAGES_DIR}/index.html`,
    filename: `./index.html`,
  }),
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

// BASE config
module.exports = {
  target: 'web',
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
        test: /\.(js|jsx)$/,
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
          // {
          //   loader: 'svgo-loader',
          //   options: {
          //     plugins: [
          //       { removeTitle: true },
          //       { convertColors: { shorthex: false } },
          //       { convertPathData: false },
          //     ],
          //   },
          // },
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
                auto: (resourcePath) => resourcePath.endsWith('.local.scss'),
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
