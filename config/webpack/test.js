const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpack = require("./webpack.js");

module.exports = merge(webpack, {
  devtool: "inline-source-map",
  mode: "production",
  devServer: {
    static: "../build",
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
    }),
  ],
});
