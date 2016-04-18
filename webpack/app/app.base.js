const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Configurator = require("webpack-config");

module.exports = new Configurator().merge({
    entry: {
        app: [path.resolve(__dirname, "..", "..", "app", "client.jsx")],
    },

    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract("style", "css!sass"),
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            __CLIENT__: true,
        }),
    ],
});
