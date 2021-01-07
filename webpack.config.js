const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    entry: {
      main: "./src/main.js"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js"
    },
    target: "electron-main"
  },
  {
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
            process.env.NODE_ENV !== "production"
              ? "vue-style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader"
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
  }
];
