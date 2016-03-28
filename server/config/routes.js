"use strict";
const Router = require("koa-router");
const path = require("path");
const loadManifest = require("../lib/promises/manifest").loadManifest;
const authenticationControllers = require("../controllers/authentication");

const API_PREFIX = "/api";

module.exports = function(app) {
    const router = new Router();

    // Local authentication
    router.post(`${API_PREFIX}/signin`, authenticationControllers.signIn);
    router.get(`${API_PREFIX}/signout`, authenticationControllers.signOut);
    router.post(`${API_PREFIX}/signUp`, authenticationControllers.signUp);
    router.get("/activate/:uid/:token", authenticationControllers.activate);

    router.get("*", function* () {
        const manifest = yield loadManifest(path.resolve(__dirname, "..", "..", "public", "manifest.json"), "app");
        this.body = yield this.render("app.hjs", {
            js: manifest.app.js,
            css: manifest.app.css,
            csrf: this.csrf,
        });
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
};
