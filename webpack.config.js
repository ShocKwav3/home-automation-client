const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const webpack = require('webpack');


module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',

  output: {
    path: path.resolve(__dirname, 'dist') + '/bundled',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },

  devtool: 'source-map',

  devServer: {
    overlay: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    alias: {
      projectRoot: path.resolve(__dirname),
      src: path.resolve(__dirname, 'src'),
    },
  },

  optimization: {
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
          enforce: true
        }
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
    new DashboardPlugin(),
    new AsyncChunkNames(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false }
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}