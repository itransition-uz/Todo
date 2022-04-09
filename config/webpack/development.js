const { merge } = require("webpack-merge");
const webpack = require("./webpack.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(webpack, {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static: "../build",
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
