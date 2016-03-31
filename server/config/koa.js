"use strict";
const path = require("path");
const logger = require("koa-logger");
const responeTime = require("koa-response-time");
const bodyParser = require("koa-bodyparser");
const compress = require("koa-compress");
const serve = require("koa-static");
const favicon = require("koa-favicon");
const csrf = require("koa-csrf");
const cors = require("koa-cors");
const views = require("co-views");
const config = require("./config");

// Bootstrap models
require("../models/index");

module.exports = function(app, passport) {
    if (process.env.NODE_ENV === "development") {
        app.use(logger());
    }

    app.use(responeTime());
    app.use(compress());
    app.use(bodyParser());
    app.use(cors());

    app.use(favicon(path.resolve(config.root, "public/img/favicon.png")));
    app.use(serve(path.resolve(config.root, "public")));
    app.use(function* (next) {
        this.render = views(path.resolve(__dirname, "..", "views"), {
            map: { hjs: "hogan" },
            cache: config.viewCache,
        });
        yield next;
    });

    app.proxy = true;

    csrf(app);
    app.use(csrf.middleware);

    app.use(passport.initialize());
    app.use(passport.session());

    // Configure hot reloading
    if (process.env.NODE_ENV === "development") {
        const webpackConfig = require("../../webpack/dev");
        const devMiddleware = require("koa-webpack-dev-middleware");
        const hotMiddleware = require("koa-webpack-hot-middleware");
        const compiler = require("webpack")(webpackConfig);

        app.use(devMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            quiet: false,
            noInfo: true,
        }));

        app.use(hotMiddleware(compiler, {
            path: "/__webpack_hmr",
            quiet: true,
            reload: true,
            heartbeat: 10 * 1000,
            timeout: 20 * 1000,
        }));
    }
};
