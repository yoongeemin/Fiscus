"use strict";
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

let config;
switch (process.env.NODE_ENV) {
    case "DEV":
        config = require("./env/development");
        break;
    case "QA":
        config = require("./env/qa");
        break;
    case "PROD":
        config = require("./env/production");
        break;
    default:
        LOGGER.error(`NODE_ENV: ${process.env.NODE_ENV} is invalid`);
        break;
}

module.exports = _.extend(defaults, config);

