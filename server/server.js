import koa from "koa";
import mongoose from "mongoose";
import passport from "passport";
import bootstrapPassport from "./config/passport";
import bootstrapKoa from "./config/koa";
import bootstrapRoutes from "./config/routes";
import config from "./config/config";

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

connect()
    .on("error", () => { LOGGER.error(`Failed to connect to mongodb server: ${config.db}`); })
    .on("open", listen);
