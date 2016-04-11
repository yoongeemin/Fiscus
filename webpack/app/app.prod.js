const path = require("path");
const webpack = require("webpack");
const Configurator = require("webpack-config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Constants = require("../constants/const.prod");

module.exports = new Configurator()
.extend(path.resolve(__dirname, "app.base"))
.extend(path.resolve(__dirname, "..", "prod"))
.merge({
    output: {
        filename: "[name].js",
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin(Object.assign({}, Constants.DEFINITION, {
            __CLIENT__: true,
        })),
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
