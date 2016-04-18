"use strict";
const path = require("path");
const webpack = require("webpack");
const Configurator = require("webpack-config");

const nodePath = path.resolve(__dirname, "..", "node_modules");

module.exports = new Configurator()
    .merge({
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
        ],
    
        module: {
            loaders: [
                {
                    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
                    loader: "url-loader",
                    query: {
                        name: "[hash].[ext]",
                        limit: 10000,
                    }
                },
                {
                    include: /\.json$/,
                    loaders: ["json-loader"],
                },
            ],
        },
    });
