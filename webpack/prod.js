const path = require("path");
const webpack = require("webpack");
const Configurator = require("webpack-config");

module.exports = new Configurator()
.extend(path.resolve(__dirname, "base"))
.merge({
    debug: false,

    plugins: [
        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
        }),
    ],
});
