const path = require("path");
const webpack = require("webpack");
const Configurator = require("webpack-config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const env = require("../../env/dev.json");

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
        new webpack.DefinePlugin({
            __CLIENT__: true,
            process.env: {
                NODE_ENV: JSON.stringify(env.NODE_ENV),
                HOSTNAME: JSON.stringify(env.HOSTNAME),
                PORT JSON.stringify(env.PORT),
            },
        }),
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
