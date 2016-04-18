"use strict";
const passport = require("koa-passport");
const User = require("../models/user");
const crypt = require("../lib/promises/crypt");
const mailer = require("../lib/promises/mailer");

const TOKEN_SIZE = 32;

function* signIn() {
    const _this = this;
    yield passport.authenticate("local", function* (err, user) {
        if (err) _this.throw(err);
        if (!user.active) _this.throw("Account is not activated");
        else {
            user = {
                email: user.email,
                mobile: user.mobile,
                firstName: user.firstName,
                lastName: user.lastName,
                accounts: user.accounts,
                preference: user.preference,
            };

            const jwtExpir = 1 * 24 * 60 * 60 * 1000; // 1 day
            _this.cookies.set("jwt", yield crypt.genJwt(user), {
                httpOnly: true,
                signed: false,
                expires: new Date(Date.now() + jwtExpir),
            });

            _this.body = user;
            _this.status = 200;
        }
    }).call(this);
}

function* signOut() {
    this.logout();
    this.session = null;
    const name = "jwt";
    const opts = {
        expires: new Date(1),
        path: "/",
    };
    this.cookies.set(name, "", opts);
    this.cookies.set(`${name}.sig`, "", opts);
    this.status = 200;
}

function* signUp() {
    const userByEmail = yield User.findOne({ email: this.request.body.email }).exec();
    if (userByEmail) this.throw("Email already exists");

    const userByMobile = yield User.findOne({ email: this.request.body.mobile }).exec();
    if (userByMobile) this.throw("Phone number already exists");

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
            domain: `${process.env.HOSTNAME}:${process.env.PORT}`,
            uid: user.id,
            token,
        };

        const SUBJECT = "Activate Your Fiscus Account";
        const HTML = yield this.render("activate.email.hjs", context);
        yield mailer.sendEmail(
            process.env.SMTP_SERVER,
            process.env.SMTP_PORT,
            process.env.SMTP_USER,
            process.env.SMTP_PASSWORD,
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
