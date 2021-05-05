const { default: merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.common");

module.exports = (envVariable) => {
  const { env } = envVariable;
  const webpackConfig = require(`./webpack.${env}.js`);

  const config = merge(commonWebpackConfig, webpackConfig);

  return config;
};
