//Webpack requires this to work with directories

const path = require("path");
// This is main configuration object that tells Webpackw what to do.
var config = {
  //path to entry paint
  entry: path.join(__dirname, "temp/sdk.js"),
  //path and filename of the final output
  output: {
    path: path.join(__dirname, "dist"),
    filename: "idrndSdk.js"
  },

  mode: "production"
};

module.exports = config;
