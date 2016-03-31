"use strict";
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const bluebird = require("bluebird");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");

module.exports = {
    genJwt: function(user) {
        return new bluebird((resolve, reject) => {
            jwt.sign(
                user,
                config.jwtSecret,
                {
                    expiresIn: config.jwtExpir,
                    issuer: process.env.HOSTNAME,
                    aogorithm: "HS512",
                },
                (err, token) => {
                    if (err) return reject(err);
                    return resolve(token);
                }
            );
        });
    },

    verifyJwt: function(token) {
        return new bluebird((resolve, reject) => {
            jwt.verify(token, config.jwtSecret, (err, decoded) => {
                if (err) return reject(err);
                return resolve(decoded);
            });
        });
    },

    genSalt: function(rounds) {
        return new bluebird((resolve, reject) => {
            bcrypt.genSalt(rounds, (err, salt) => {
                if (err) return reject(err);
                return resolve(salt);
            });
        });
    },

    hash: function(value, salt) {
        return new bluebird((resolve, reject) => {
            bcrypt.hash(value, salt, (err, hasedValue) => {
                if (err) return reject(err);
                return resolve(hasedValue);
            });
        });
    },

    compare: function(value, hashedValue) {
        return new bluebird((resolve, reject) => {
            bcrypt.compare(value, hashedValue, (err, match) => {
                if (err) return reject(err);
                return resolve(match);
            });
        });
    },

    randomBytes: function(size) {
        return new bluebird((resolve, reject) => {
            crypto.randomBytes(size, (err, buff) => {
                if (err) return reject(err);
                const token = buff.toString("hex");
                return resolve(token);
            });
        });
    },
};
