const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    static: "../build",
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },

  entry: {
    index: "./src/index.js",
  },

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },

  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo App",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new ReactRefreshWebpackPlugin(),
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true,
    // }),
  ],

  module: {
    rules: [
      // CSS, SASS
      {
        test: /\.s?[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      // ASSETS
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
        type: "asset",
      },

      // REACT
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
