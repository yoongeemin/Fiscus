const path = require("path");
const fs = require("fs");
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

    entry: [path.resolve(__dirname, "..", "..", "server", "server.js")],

    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "..", "..", "public"),
    },

    externals: nodeModules,
});
