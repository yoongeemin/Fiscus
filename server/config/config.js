"use strict";
const _ = require("lodash");
const path = require("path");
const LOGGER = require("../lib/logger");

const defaults = {
    root: path.resolve(__dirname, "..", ".."),
    jwtSecret: "shhh this is a secret",
    jwtExpir: "1d",
    smtpServer: "smtp.gmail.com",
    smtpPort: 587,
    smtpUser: "yoongeemin@gmail.com",
    smtpPassword: "jywzaiwblxbqfvug",
};

let config;
switch (process.env.NODE_ENV) {
    case "development":
        config = require("./env/development");
        break;
    case "qa":
        config = require("./env/qa");
        break;
    case "production":
        config = require("./env/production");
        break;
    default:
        LOGGER.error(`NODE_ENV: ${process.env.NODE_ENV} is invalid`);
        break;
}

module.exports = _.extend(defaults, config);

