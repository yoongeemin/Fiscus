const path = require("path");
const Configurator = require("webpack-config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = new Configurator()
.extend(path.resolve(__dirname, "app.base"))
.extend(path.resolve(__dirname, "..", "prod"))
.merge({
    output: {
        filename: "[name].js",
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
});
