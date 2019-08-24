const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.common.js')
const merge = require('webpack-merge')


module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    overlay: true,
    historyApiFallback: true,
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: {
        source: false,
      },
    }),
  ],
})