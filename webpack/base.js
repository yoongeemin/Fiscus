"use strict";
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Configurator = require("webpack-config");

const nodePath = path.resolve(__dirname, "..", "node_modules");

module.exports = new Configurator().merge({
    entry: {
        app: [path.resolve(__dirname, "..", "app", "client.jsx")],
    },

    output: {
        path: path.resolve(__dirname, "..", "public", "assets"),
        publicPath: "/assets/",
    },

    resolve: {
        extensions: ["", ".js", ".jsx"],

        alias: {
            "bootstrap-css": `${nodePath}/bootstrap/dist/css/bootstrap.min.css`,
            "bootstrap-theme-css": `${nodePath}/bootstrap/dist/css/bootstrap-theme.min.css`,
            "bootstrap-js": `${nodePath}/bootstrap/dist/js/bootstrap.min.js`,
            "jquery": `${nodePath}/jquery/dist/jquery.min.js`,
            "jquery-ui": `${nodePath}/jquery-ui/themes/smoothness/jquery-ui.min.css`,
        },
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.ProvidePlugin({
            $: "jquery",
            _: "lodash",
        }),
        new webpack.DefinePlugin({
            HOSTNAME: JSON.stringify(process.env.HOSTNAME),
            PORT: JSON.stringify(process.env.PORT),
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
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
