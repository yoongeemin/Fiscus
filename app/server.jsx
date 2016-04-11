import path from "path";
import React from "react";
import Immutable from "immutable";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { RouterContext, browserHistory, match } from "react-router";
import bluebird from "bluebird";
import { configureStore } from "./lib/store";
import configureRoutes from "./config/routes";
import reducers from "./reducers/index";
import { loadManifest } from "../server/lib/promises/manifest";
import { DEV, QA, PROD } from "./lib/constants";

const getAssets = (env) => {
    switch (env) {
        default:
        case DEV: {
            return loadManifest(path.resolve(__dirname, "..", "public", "manifest.json"))
                .then((manifest) => {
                    return {
                        js: manifest.app.js,
                        css: manifest.app.css,
                    };
                });
        }
        case QA:
        case PROD:
            return bluebird.resolve({
                js: "app.js",
                css: "app.css",
            });
    }
};

export function* render() {
    const _this = this;
    const store = configureStore(reducers, browserHistory, Immutable.Map());
    const routes = configureRoutes(store);

    const matchPromise = bluebird.promisify(match, { multiArgs: true });
    const body = yield matchPromise({ routes, location: _this.url })
        .then((response) => {
            const redirect = response[0];
            const props = response[1];
            if (redirect) { _this.redirect(`${redirect.pathname}${redirect.search}`); }
            else if (props) {
                let promises = [getAssets(__ENV__), bluebird.resolve(props)];
                promises = promises.concat(props.components.reduce((prev, current) => {
                    return prev.concat(
                        current.WrappedComponent
                            ? (current.WrappedComponent.init.map((action) => { return store.dispatch(action); }) || [])
                            : []
                    );
                }, []));
                return bluebird.all(promises);
            }
            else { _this.throw(404); }
        })
        .then((response) => {
            const assets = response[0];
            const props = response[1];

            const main = renderToString(
                <Provider store={store}>
                    <RouterContext {...props} />
                </Provider>
            );

            return {
                main,
                csrf: _this.csrf,
                initialState: JSON.stringify(store.getState()),
                js: assets.js,
                css: assets.css,
            };
        })
        .catch((err) => {
            _this.throw(err, 500);
        });

    _this.body = yield _this.render("app.hjs", body);
    _this.status = 200;
}
