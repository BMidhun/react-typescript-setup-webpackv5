const webpack = require("webpack");
module.exports = {
    mode:'development', // By setting the mode the webpack would set the appropriate size for the bundle file.
    devtool : 'cheap-module-source-map',
    plugins : [
        new webpack.DefinePlugin({
            "process.env.name":JSON.stringify("DEVELOPMENT")
        })
    ]
}