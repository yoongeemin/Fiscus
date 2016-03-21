const path = require("path");
const webpack = require("webpack");
const Configurator = require("webpack-config");

module.exports = new Configurator()
.extend(path.resolve(__dirname, "app.base"))
.extend(path.resolve(__dirname, "..", "dev"))
.merge({
    // Add webpack hot reloading
    entry: [
        "webpack-hot-middleware/client",
        "webpack/hot/dev-server",
    ],

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],

    eslint: {
        configFile: path.resolve(__dirname, "..", "..", ".eslintrc.react"),
    },
});
