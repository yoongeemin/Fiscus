import { Strategy as LocalStrategy } from "passport-local";
import User from "../../models/user";
import co from "co";

function* authenticateUser(user, password, done) {
    const match = yield* user.authenticate(password);
    if (match) done(null, user);
    else done(null, false, { message: "Invalid user or password" });
}

function signIn(signin, password, done) {
    co(function* () {
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
    });
}

export default new LocalStrategy({ usernameField: "signin" }, signIn);
