const bcrypt = require("bcrypt");
const crypto = require("crypto");
const bluebird = require("bluebird");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");

module.exports = {
    genJwt: (user) => {
        return new bluebird((resolve, reject) => {
            jwt.sign(
                user,
                config.jwtSecret,
                {
                    expiresIn: config.jwtExpir,
                    issuer: process.env.HOSTNAME,
                    algorithm: "HS512",
                },
                (token) => {
                    if (token) return resolve(token);
                    return reject(err);
                }
            );
        });
    },

    verifyJwt: (token) => {
        return new bluebird((resolve, reject) => {
            jwt.verify(token, config.jwtSecret, (err, decoded) => {
                if (err) return reject(err);
                return resolve(decoded);
            });
        });
    },

    genSalt: (rounds) => {
        return new bluebird((resolve, reject) => {
            bcrypt.genSalt(rounds, (err, salt) => {
                if (err) return reject(err);
                return resolve(salt);
            });
        });
    },

    hash: (value, salt) => {
        return new bluebird((resolve, reject) => {
            bcrypt.hash(value, salt, (err, hasedValue) => {
                if (err) return reject(err);
                return resolve(hasedValue);
            });
        });
    },

    compare: (value, hashedValue) => {
        return new bluebird((resolve, reject) => {
            bcrypt.compare(value, hashedValue, (err, match) => {
                if (err) return reject(err);
                return resolve(match);
            });
        });
    },

    randomBytes: (size) => {
        return new bluebird((resolve, reject) => {
            crypto.randomBytes(size, (err, buff) => {
                if (err) return reject(err);
                const token = buff.toString("hex");
                return resolve(token);
            });
        });
    },
};
