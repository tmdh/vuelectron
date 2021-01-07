const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    index: "./src/renderer/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/app"),
    filename: "[name].js"
  },
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
          isDev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { esModule: false, sourceMap: isDev }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/renderer/index.html"
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};
