const _ = require("lodash");
const path = require("path");
const LOGGER = require("../lib/logger");

const defaults = {
    root: path.resolve(__dirname, "..", ".."),
    smtpServer: "smtp.gmail.com",
    smtpPort: 587,
    smtpUser: "yoongeemin@gmail.com",
    smtpPassword: "jywzaiwblxbqfvug",
    sessionSecret: ["shhh", "this is a csrf secret"],
    jwtSecret: "this is a jwt secret",
    jwtExpir: "1d",
};

switch (process.env.NODE_ENV) {
    case "DEV":
        module.exports = _.extend(defaults, require("./env/development"));
        break;
    case "QA":
        module.exports = _.extend(defaults, require("./env/qa"));
        break;
    case "PROD":
        module.exports = _.extend(defaults, require("./env/production"));
        break;
    default:
        LOGGER.error(`NODE_ENV: ${process.env.NODE_ENV} is invalid`);
        break;
}
