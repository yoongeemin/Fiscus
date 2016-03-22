import bcrypt from "bcrypt-nodejs";
import crypto from "crypto";
import bluebird from "bluebird";

export function genSalt(rounds) {
    return new bluebird((resolve, reject) => {
        bcrypt.genSalt(rounds, (err, salt) => {
            if (err) return reject(err);
            return resolve(salt);
        });
    });
}

export function hash(value, salt) {
    return new bluebird((resolve, reject) => {
        bcrypt.hash(value, salt, (err, hasedValue) => {
            if (err) return reject(err);
            return resolve(hasedValue);
        });
    });
}

export function compare(value, hasedValue) {
    return new bluebird((resolve, reject) => {
        bcrypt.compare(value, hasedValue, (err, match) => {
            if (err) return reject(err);
            return resolve(match);
        });
    });
}

export function randomBytes(size) {
    return new bluebird((resolve, reject) => {
        crypto.randomBytes(size, (err, buff) => {
            if (err) return reject(err);
            const token = buff.toString("hex");
            return resolve(token);
        });
    });
}
