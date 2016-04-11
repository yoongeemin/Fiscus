const path = require("path");
const webpack = require("webpack");
const Configurator = require("webpack-config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const Constants = require("../constants/const.dev");

module.exports = new Configurator()
.extend(path.resolve(__dirname, "app.base"))
.extend(path.resolve(__dirname, "..", "dev"))
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
            path: path.resolve(__dirname, "..", "..", "public"),
            filename: "manifest.json",
        }),
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
                query: {
                    presets: ["react-hmre"],
                },
            },
        ],
    },
});
