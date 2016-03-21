const path = require("path");
const Configurator = require("webpack-config");

module.exports = new Configurator()
.extend(path.resolve(__dirname, "server.base"))
.extend(path.resolve(__dirname, "..", "prod"))
.merge({ });
