const webpack = require("webpack");
const path = require("path");
const envPath = path.resolve(__dirname, "../", ".env");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const dotenv = require("dotenv");

const envparsed = dotenv.config({ path: envPath }).parsed;

module.exports = {
  mode: "production",
  devtool: "source-map", // OPTIONAL
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(envparsed),
    }),

    // new BundleAnalyzerPlugin(), // Uncomment to see a server that shows the modules that are part of the bundle
  ],
};
