const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const Configurator = require("webpack-config");

module.exports = new Configurator().merge({
    entry: {
        app: [path.resolve(__dirname, "..", "..", "app", "client.jsx")],
    },

    output: {
        publicPath: "/assets/",
        path: "/",
    },

    plugins: [
        new ExtractTextPlugin("[name].[hash].css"),
        new AssetsPlugin({
            filename: "app.manifest.json",
            path: path.resolve(__dirname, "..", "..", "public"),
            fullPath: false,
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract("style", "css!sass"),
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader?limit=8192",
            },
            {
                include: /\.json$/,
                loaders: ["json-loader"],
            },
        ],
    },
});
