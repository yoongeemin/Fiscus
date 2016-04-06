const Router = require("koa-router");
//const path = require("path");
//const loadManifest = require("../lib/promises/manifest").loadManifest;
const authenticationControllers = require("../controllers/authentication");

const server = require("../../public/assets/server");

const API_PREFIX = "/api";

module.exports = (app) => {
    const router = new Router();

    // Local authentication
    router.post(`${API_PREFIX}/signin`, authenticationControllers.signIn);
    router.post(`${API_PREFIX}/signup`, authenticationControllers.signUp);
    router.get(`${API_PREFIX}/signout`, authenticationControllers.signOut);
    router.get("/activate/:uid/:token", authenticationControllers.activate);
    router.get("*", server.render);

    app.use(router.routes());
    app.use(router.allowedMethods());
};
