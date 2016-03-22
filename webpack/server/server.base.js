const path = require("path");
const fs = require("fs");
const AssetsPlugin = require("assets-webpack-plugin");
const Configurator = require("webpack-config");

// Resolve binary dependency in node modules
const nodeModules = {};
fs.readdirSync("node_modules")
    .filter(mod => {
        return [".bin"].indexOf(mod) === -1;
    })
    .forEach(mod => {
        nodeModules[mod] = `commonjs ${mod}`;
    });

module.exports = new Configurator().merge({
    target: "node",

    node: {
        __dirname: true,
        __filename: true,
    },

    entry: {
        server: [path.resolve(__dirname, "..", "..", "server", "server.js")],
    },

    output: {
        path: path.resolve(__dirname, "..", "..", "public"),
    },

    plugins: [
        new AssetsPlugin({
            filename: "server.manifest.json",
            path: path.resolve(__dirname, "..", "..", "public"),
            fullPath: false,
        }),
    ],

    externals: nodeModules,
});
