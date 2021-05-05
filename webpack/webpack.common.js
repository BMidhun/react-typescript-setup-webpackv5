const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"), // root file of the project
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Helps in resolving the file extension while importing the files having these extensions.
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              happyPackMode: true,
              configFile: path.resolve(__dirname, "../", "tsconfig.json"),
            },
          },
        ],
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },

      {
        test: /\.(s?css|sass)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        // Webpack v5 configuration for loading images of the following fo
        test: /\.(?:ico|jpg|jpeg|png|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },

  // mode : 'development', // sets process.env == 'development',

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }), // HTMLPlugin would help in injecting the script tag in to the html file in the src folder.

    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
