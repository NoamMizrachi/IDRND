//Webpack requires this to work with directories
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
// This is main configuration object that tells Webpackw what to do.
var config = {
    //path to entry paint
    entry: ['whatwg-fetch', "./js/sdk.js"],
    //path and filename of the final output
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "idrndSdk.js",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimizer: [new TerserPlugin()],
        minimize: true
    },

    mode: "production"
};

if (process.argv.includes("--dev")) {
    (config.mode = "development"), (config.devtool = "eval-source-map");
    console.log(JSON.stringify(config));
}
module.exports = config;
