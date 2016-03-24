import Router from "koa-router";
import path from "path";
import { loadChunk } from "../lib/promises/manifest";
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
        const chunk = yield loadChunk(path.resolve("public", "manifest.json"), "app");
        this.body = yield this.render("app.hjs", {
            js: chunk.js,
            css: chunk.css,
        });
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
}
