"use strict";
const path = require("path");
const Configurator = require("webpack-config");

module.exports = new Configurator()
    .extend(path.resolve(__dirname, "base"))
    .merge({
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
