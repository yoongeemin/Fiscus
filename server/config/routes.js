import Router from "koa-router";
import { readFileSync } from "fs";
import path from "path";
import Promise from "bluebird";
import { readManifest } from "../lib/promises/manifest";
import * as authenticationControllers from "../controllers/authentication";

const API_PREFIX = "/api";

export default function(app) {
    const router = new Router();

    // Local authentication
    router.post(`${API_PREFIX}/signin`, authenticationControllers.signIn);
    router.get(`${API_PREFIX}/signout`, authenticationControllers.signOut);
    //router.get(`${API_PREFIX}/activate/:uid/:token`, authenticationControllers.activate);
    router.post(`${API_PREFIX}/signUp`, authenticationControllers.signUp);

    router.get("*", function* () {
        const manifest = yield parseManifest(path.resolve("public", "app.manifest.json"));
        this.body = yield this.render("app.hjs", {
            js: manifest.app.js,
            css: manifest.app.css,
        });
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
}
