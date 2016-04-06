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

const getAssets = (env) => {
    switch (env) {
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

    const store = configureStore(reducers, browserHistory, {});
    const routes = configureRoutes(store);

    match({ routes, location: _this.url }, (err, redirect, props) => {
        if (err) { _this.throw(err, 500); }
        else if (redirect) { _this.redirect(`${redirect.pathname}${redirect.search}`); }
        else if (props) {
            const promises = [getAssets(__ENV__)];

            promises.concat(props.components.reduce((prev, current) => {
               return prev.concat(current.WrappedComponent ? (current.WrappedComponent.init || []) : []);
            }, []));

            bluebird.all(promises)
                .then((assets) => {
                    const main = renderToString(
                        <Provider store={store}>
                            <RouterContext {...props} />
                        </Provider>
                    );

                    return bluebird.coroutine(function* () {
                        yield _this.render("app.hjs", {
                            main,
                            initialState: store.getState(),
                            js: assets.js,
                            css: assets.css,
                        });
                    });
                })
                .then((html) => {
                    _this.body = html;
                })
                .catch((err) => {
                    _this.throw(500, err.message());
                });
        }
        else { _this.throw(404); }
    });
}
