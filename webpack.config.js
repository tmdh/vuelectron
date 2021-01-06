const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = [
  {
    entry: {
      main: "./src/main.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    target: "electron-main",
  },
  {
    entry: {
      index: "./src/renderer/index.js",
    },
    output: {
      path: path.resolve(__dirname, "dist/app"),
      filename: "[name].js",
    },
    target: "electron-renderer",
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/renderer/index.html",
      }),
    ],
  },
];
