const path = require("path");
const webpack = require("webpack");
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

    plugins: [
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV),
            __HOSTNAME__: JSON.stringify(process.env.HOSTNAME),
            __PORT__: JSON.stringify(process.env.PORT),
            __CLIENT__: false,
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
});
