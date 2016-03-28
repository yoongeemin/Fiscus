"use strict";
const koa = require("koa");
const mongoose = require("mongoose");
const passport = require("passport");
const bootstrapPassport = require("./config/passport");
const bootstrapKoa = require("./config/koa");
const bootstrapRoutes = require("./config/routes");
const config = require("./config/config");
const LOGGER = require("./lib/logger");

const app = koa();
bootstrapPassport(app, passport);
bootstrapKoa(app, passport);
bootstrapRoutes(app);

function listen() {
    app.listen(process.env.PORT);
    LOGGER.info(`Server starting on port: ${process.env.PORT}`);
}

function connect() {
    mongoose.connect(config.db);
    return mongoose.connection;
}

if (!module.parent) {
    connect()
        .on("error", () => {
            LOGGER.error(`Failed to connect to mongodb server: ${config.db}`);
        })
        .on("open", listen);
}
