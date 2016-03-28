"use strict";
const path = require("path");
const webpack = require("webpack");
const AssetsPlugin = require("assets-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Configurator = require("webpack-config");

module.exports = new Configurator()
.extend(path.resolve(__dirname, "base"))
.merge({
    debug: true,

    devtool: "cheap-module-source-map",

    // Add webpack hot reloading
    entry: {
        app: [
            "webpack-hot-middleware/client",
            "webpack/hot/dev-server",
        ],
    },

    output: {
        filename: "[name].[hash].js",
    },

    plugins: [
        new ExtractTextPlugin("[name].[hash].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new AssetsPlugin({
            fullPath: false,
            path: path.resolve(__dirname, "..", "public"),
            filename: "manifest.json",
        }),
    ],

    eslint: {
        configFile: path.resolve(__dirname, "..", ".eslintrc.react"),
    },

    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
        ],
    },
});
