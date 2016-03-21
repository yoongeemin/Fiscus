import co from "co";
import crypt from "../lib/promises/crypt";
import mongoose from "mongoose";
import { AccountSchema } from "./main";

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
        type: Number,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    token: String,
    tokenExpiration: Date,
    profile: {
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
    },
});

// Hash user password
UserSchema.pre("save", function(done) {
    const user = this;

    // Only hash the password if it has been added or modified
    if (!user.isModified("password")) {
        done();
    }

    co(function* () {
        try {
            const salt = yield crypt.genSalt(SALT_ROUNDS);
            const hash = yield crypt.hash(user.password, salt);
            user.password = hash;
            done();
        }
        catch (err) {
            done(err);
        }
    }).then(done);
});

UserSchema.methods = {
    *authenticate(password) {
        return yield crypt.compare(password, this.password);
    },
};

export default mongoose.model("User", UserSchema);
