"use strict";
const path = require("path");
const Configurator = require("webpack-config");

module.exports = new Configurator().merge({
    target: "node",

    node: {
        __dirname: true,
        __filename: true,
    },

    entry: {
        server: [path.resolve(__dirname, "..", "..", "app", "server.jsx")],
    },

    output: {
        filename: "[name].js",
        libraryTarget: "commonjs2",
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            //{
            //    test: /\.css$/,
            //    loaders: ["style", "css"],
            //},
            //{
            //    test: /\.scss$/,
            //    loaders: ["style", "css", "sass"],
            //},
        ],
    },
});
