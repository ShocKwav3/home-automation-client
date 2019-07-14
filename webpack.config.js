const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',

  output: {
    path: path.resolve(__dirname, 'dist') + '/bundled',
    filename: 'bundle.js',
  },

  devtool: 'source-map',

  devServer: {
    overlay: true
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
  ],
}