"use strict";
const passport = require("koa-passport");
const config = require("../config/config");
const User = require("../models/user");
const crypt = require("../lib/promises/crypt");
const mailer = require("../lib/promises/mailer");

const TOKEN_SIZE = 32;

function* authenticate() {
    const jwt = this.cookies.get("fiscusJwt", { signed: true });

    if (!jwt) {
        this.throw("Not authenticated");
    }
    else {
        this.body = yield crypt.verifyJwt(jwt);
        this.status = 200;
    }
}

function* signIn() {
    const _this = this;
    yield* passport.authenticate("local", function* (err, user) {
        if (err) throw err;
        if (!user.active) _this.throw("Account is not activated");
        else {
            const jwt = yield crypt.genJwt(user);
            this.cookies.set("fiscusJwt", jwt, {
                httpOnly: true,
                secure: true,
                signed: true,
            });
            _this.status = 200;
        }
    }).call(this);
}

function* signOut() {
    this.logout();
    this.session = null;
    this.status = 200;
}

function* signUp() {
    const userByEmail = yield User.findOne({email: this.request.body.email}).exec();
    if (userByEmail)
        this.throw("Email already exists");

    const userByMobile = yield User.findOne({email: this.request.body.mobile}).exec();
    if (userByMobile)
        this.throw("Phone number already exists");

    try {
        const token = yield crypt.randomBytes(TOKEN_SIZE);

        let user = new User({
            firstName: this.request.body.first_name,
            lastName: this.request.body.last_name,
            email: this.request.body.email,
            mobile: this.request.body.mobile,
            password: this.request.body.password,
        });

        user.token = token;
        user.tokenExpiration = Date.now() + (60 * 60 * 1000); // 1 hour;

        user = yield user.save();

        const context = {
            domain: config.domain,
            uid: user.id,
            token,
        };

        const SUBJECT = "Activate Your Fiscus Account";
        const HTML = yield this.render("activate.email.hjs", context);
        yield mailer.sendEmail(
            config.smtpServer,
            config.smtpPort,
            config.smtpUser,
            config.smtpPassword,
            user.email,
            SUBJECT,
            HTML
        );

        this.status = 200;
    }
    catch (err) {
        this.throw(`Error while signing up user: ${err}`);
    }
}

function* activate() {
    const token = this.params.token;

    try {
        // Find user by email
        const user = yield User.findOne({
            _id: this.params.uid,
            token,
            tokenExpiration: { $gt: Date.now() },
        }).exec();

        if (!user) {
            this.throw("Activation token is invalid or has expired");
        }
        else {
            user.active = true;
            yield user.save();
            this.status = 200;
        }
    }
    catch (err) {
        this.throw(`Error while activating user: ${err}`);
    }
}

module.exports = {
    signIn,
    signOut,
    signUp,
    activate,
};
