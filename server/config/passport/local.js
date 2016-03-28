"use strict";
const bluebird = require("bluebird");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/user");

function* authenticateUser(user, password, done) {
    const match = yield* user.authenticate(password);
    if (match) done(null, user);
    else done(null, false, { message: "Invalid user or password" });
}

function signIn(signin, password, done) {
    bluebird.coroutine(function* () {
        try {
            // Find user by email
            const userByEmail = yield User.findOne({ email: signin }).exec();
            if (userByEmail) yield* authenticateUser(userByEmail, password, done);

            // Find user by mobile
            const userByMobile = yield User.findOne({ mobile: signin }).exec();
            if (userByMobile) yield* authenticateUser(userByMobile, password, done);
            done(null, false, { message: "Invalid user or password" });
        }
        catch (err) { done(err); }
    })().then(done);
}

module.exports = new LocalStrategy({ usernameField: "signin" }, signIn);
