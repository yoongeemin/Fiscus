const Router = require("koa-router");
const authenticationControllers = require("../controllers/authentication");

const server = require("../../public/assets/server");

const API_PREFIX = "/api";

module.exports = (app) => {
    const router = new Router();

    // Local authentication
    router.post(`${API_PREFIX}/authenticate`,        authenticationControllers.authenticate);
    router.post(`${API_PREFIX}/signin`,              authenticationControllers.signIn);
    router.post(`${API_PREFIX}/signup`,              authenticationControllers.signUp);
    router.get(`${API_PREFIX}/signout`,              authenticationControllers.signOut);
    router.get(`${API_PREFIX}/activate/:uid/:token`, authenticationControllers.activate);

	// Application API
    router.get(`${API_PREFIX}/quotes`, appControllers.getQuotes);
    
    // Server side rendering
    router.get("*", server.render);

    app.use(router.routes());
    app.use(router.allowedMethods());
};
