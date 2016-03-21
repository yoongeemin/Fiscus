import passport from "koa-passport";
import config from "../config/config";
import User from "../models/user";
import crypt from "../lib/promises/crypt";
import mailer from "../lib/promises/mailer";

const TOKEN_SIZE = 256;

export function* signIn() {
    const self = this;
    yield* passport.authenticate("local", function* (err, user) {
        if (err) throw err;
        else if (!user) this.redirect("/signin");
        else {
            yield self.login(user);
            self.body = { profile: user.profile };
        }
    });
}

export function* signOut() {
    this.logout();
    this.session = null;
}

export function* signUp() {
    const userByEmail = yield User.findOne({ email: this.request.body.email }).exec();
    if (userByEmail) this.throw("Email already exists");
    else {
        const userByMobile = yield User.findOne({ email: this.request.body.mobile }).exec();
        if (userByMobile) this.throw("Phone number already exists");
        else {
            try {
                const token = yield crypt.randomBytes(TOKEN_SIZE);

                let user = new User({
                    firstName: this.request.body.firstName,
                    lastName: this.request.body.lastName,
                    email: this.request.body.email,
                    mobile: this.request.body.mobile,
                    password: this.request.body.password,
                });

                user.token = token;
                user.tokenExpiration = Date.now() + 3600000; // 1 hour;

                user = yield user.save();

                const context = {
                    protocol: this.request.protocol,
                    domain: config.domain,
                    uid: this.request.user,
                    token,
                };

                const SUBJECT = "Activate Your Fiscus Account";
                const HTML = yield this.render("activate.email", context);
                yield mailer.sendEmail(
                    config.smtpUser,
                    config.smtpPassword,
                    user.email,
                    SUBJECT,
                    HTML
                );
            }
            catch (err) {
                this.throw("Error while signing up user");
            }
        }
    }
}

//export function* activate() {
//    const token = this.params.token;
//
//    // Find user by email
//    User.findOne({
//        id: req.params.uid,
//        token,
//        tokenExpiration: { $gt: Date.now() },
//    }, (err, user, done) => {
//        if (!user) {
//            req.flash("error", "Activation token is invalid or has expired");
//        }
//        else {
//            user.active = true;
//            user.save(err => {
//                done(err, token, user);
//            });
//            res.redirect("/");
//        }
//    });
//}
