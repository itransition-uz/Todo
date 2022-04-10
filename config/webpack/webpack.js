const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.tsx",
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
    path: path.resolve(__dirname, "../../build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo App",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
};
