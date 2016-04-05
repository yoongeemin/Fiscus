const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Configurator = require("webpack-config");

module.exports = new Configurator().merge({
    entry: {
        app: [path.resolve(__dirname, "..", "..", "app", "client.jsx")],
    },

    plugins: [
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV),
            __HOSTNAME__: JSON.stringify(process.env.HOSTNAME),
            __PORT__: JSON.stringify(process.env.PORT),
            __CLIENT__: true,
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract("style", "css!sass"),
            },
        ],
    },
});
