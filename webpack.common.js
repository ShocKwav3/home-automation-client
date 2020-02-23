const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const AsyncChunkNames = require('webpack-async-chunk-names-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const DashboardPlugin = require("webpack-dashboard/plugin")
const webpack = require('webpack')


module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',

  output: {
    path: path.resolve(__dirname, 'dist') + '/bundled',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "source-map-loader",
      },
      /*{
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { minimize: true } },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(ttf|png|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader"
      }*/
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],

    alias: {
      projectRoot: path.resolve(__dirname),
      src: path.resolve(__dirname, 'src'),
    },
  },

  optimization: {
    //concatenateModules: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          priority: 20,
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'async',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new HtmlWebPackPlugin({
      title: 'Automation Client',
      hash: true,
      template: "./src/index.ejs",
      filename: "./index.html",
    }),
    new AsyncChunkNames(),
    new DashboardPlugin(),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true,
      'shorthands': true,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}