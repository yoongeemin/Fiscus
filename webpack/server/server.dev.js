const path = require("path");
const webpack = require("webpack");
const Configurator = require("webpack-config");
const Constants = require("../constants/const.dev");

module.exports = new Configurator()
.extend(path.resolve(__dirname, "server.base"))
.extend(path.resolve(__dirname, "..", "dev"))
.merge({
    plugins: [
        new webpack.DefinePlugin(Object.assign({}, Constants.DEFINITION, {
            __CLIENT__: false,
        })),
    ],
});
