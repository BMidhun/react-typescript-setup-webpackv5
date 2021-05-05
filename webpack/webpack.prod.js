const webpack = require("webpack");
const path = require("path");
const envPath = path.resolve(__dirname,"../",".env");

const dotenv = require("dotenv");

const envparsed = dotenv.config({path:envPath}).parsed;

module.exports = {
    mode:'production',
    devtool : 'source-map', // OPTIONAL
    plugins : [
        new webpack.DefinePlugin({
            "process.env" : JSON.stringify(envparsed)
        })
    ]
}

