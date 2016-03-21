const path = require("path");
const Configurator = require("webpack-config");

module.exports = new Configurator()
.extend(path.resolve(__dirname, "base"))
.merge({
    debug: true,

    devtool: "cheap-module-source-map",

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
