const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');


module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',

  output: {
    path: path.resolve(__dirname, 'dist') + '/bundled',
    filename: 'bundle.js',
  },

  devtool: 'source-map',

  devServer: {
    overlay: true,
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

  plugins: [
    new HtmlWebPackPlugin({
      title: 'Automation Client',
      hash: true,
      template: "./src/index.ejs",
      filename: "./index.html",
    }),
    new DashboardPlugin(),
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