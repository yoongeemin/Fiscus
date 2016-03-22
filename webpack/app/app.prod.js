import path from "path";
import Configurator from "webpack-config";

module.exports = new Configurator()
.extend(path.resolve(__dirname, "app.base"))
.extend(path.resolve(__dirname, "..", "prod"))
.merge({ });
