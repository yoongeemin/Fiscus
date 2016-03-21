import path from "path";
import logger from "koa-logger";
import responeTime from "koa-response-time";
import bodyParser from "koa-bodyparser";
import compress from "koa-compress";
import serve from "koa-static";
import session from "koa-generic-session";
import MongoStore from "koa-generic-session-mongo";
import favicon from "koa-favicon";
import csrf from "koa-csrf";
import cors from "koa-cors";
import views from "co-views";
import config from "./config";

export default function(app, passport) {
    if (process.env.NODE_ENV === "development") {
        app.use(logger());
    }

    app.use(responeTime());
    app.use(compress());
    app.use(bodyParser());
    app.use(csrf());
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
    app.keys = config.sessionSecret;
    app.use(session({
        cookie: {
            httpOnly: true,
            signed: true,
        },
        store: new MongoStore({
            url: config.db,
        }),
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    // Configure hot reloading
    if (process.env.NODE_ENV === "development") {
        const webpackConfig = require("../../webpack/app/app.dev");
        const devMiddleware = require("koa-webpack-dev-middleware");
        const hotMiddleware = require("koa-webpack-hot-middleware");
        const compiler = require("webpack")(webpackConfig);

        app.use(devMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            noInfo: true,
            watchOptions: {
                aggregateTimeout: 2000,
            },
        }));

        app.use(hotMiddleware(compiler, {
            path: "/__webpack_hmr",
            noInfo: true,
            reload: true,
            heartbeat: 10 * 1000,
            timeout: 20000,
        }));
    }
}
