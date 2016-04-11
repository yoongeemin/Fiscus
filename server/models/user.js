const bluebird = require("bluebird");
const crypt = require("../lib/promises/crypt");
const mongoose = require("mongoose");
const AccountSchema = require("./main").AccountSchema;

const SALT_ROUNDS = 5;

const UserSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    mobile: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    token: String,
    tokenExpiration: Date,

    firstName: {
        type: String,
        required: true,
        lowercase: true,
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true,
    },
    accounts: [AccountSchema],
    preference: {

    },
});

// Hash user password
UserSchema.pre("save", (done) => {
    const user = this;

    // Only hash the password if it has been added or modified
    if (!user.isModified("password")) {
        done();
    }

    bluebird.coroutine(function* () {
        try {
            const salt = yield crypt.genSalt(SALT_ROUNDS);
            const hash = yield crypt.hash(user.password, salt);
            user.password = hash;
            done();
        }
        catch (err) {
            done(err);
        }
    })().then(done);
});

module.exports = mongoose.model("User", UserSchema);
