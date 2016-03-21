const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Configurator = require("webpack-config");

module.exports = new Configurator().merge({
    entry: [path.resolve(__dirname, "..", "..", "app", "client.jsx")],

    output: {
        filename: "app.js",
        publicPath: "/assets/",
        path: "/",
    },

    plugins: [
        new ExtractTextPlugin("app.css"),
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
