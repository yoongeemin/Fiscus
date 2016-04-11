const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/user");
const crypt = require("../../lib/promises/crypt");

const signIn = (signin, password, done) => {
    User.findOne({ $or: [{ email: signin }, { mobile: signin }] }).exec()
        .then((user) => {
            if (user) {
                crypt.compare(password, user.password)
                    .then((match) => {
                        if (match) return done(null, user);
                        return done("Invalid user or password", null);
                    });
            }
            else return done("Email or phone number does not exist", null);
        })
        .catch((err) => {
            return done(null, err);
        });
};

module.exports = new LocalStrategy({ usernameField: "signin" }, signIn);
