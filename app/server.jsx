import path from "path";
import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { RouterContext, browserHistory, match } from "react-router";
import bluebird from "bluebird";
import { configureStore } from "./lib/store";
import configureRoutes from "./config/routes";
import reducers from "./reducers/index";
import { loadManifest } from "../server/lib/promises/manifest";

function getAssets() {
    switch (__ENV__) {
        default:
        case "DEV": {
            return loadManifest(path.resolve(__dirname, "..", "public", "manifest.json"))
                .then((manifest) => {
                    return {
                        js: manifest.app.js,
                        css: manifest.app.css,
                    };
                });
        }
        case "PROD":
            return bluebird.resolve({
                js: "app.js",
                css: "app.css",
            });
    }
}

export function* render() {
    const _this = this;

    const initialState = {};
    const store = configureStore(reducers, browserHistory, initialState);
    const routes = configureRoutes(store);

    const html = new bluebird((resolve) => {
        match({ routes, location: _this.url }, (err, redirect, props) => {
            if (err) {
                _this.throw(err, 500);
            }
            else if (redirect) {
                _this.redirect(`${redirect.pathname}${redirect.search}`);
            }
            else if (props) {
                resolve(renderToString(
                    <Provider store={store}>
                        <RouterContext {...props} />
                    </Provider>
                ));
            }
            else {
                _this.throw(404);
            }
        });
    });

    try {
        const main = yield html;
        const assets = yield getAssets();
        _this.body = yield _this.render("app.hjs", {
            main,
            js: assets.js,
            css: assets.css,
        });
    }
    catch (err) {
        _this.throw(err);
    }
}
