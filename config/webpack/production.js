const { merge } = require("webpack-merge");
const webpack = require("./webpack.js");

module.exports = merge(webpack, {
  mode: "production",
  devtool: false,
});
