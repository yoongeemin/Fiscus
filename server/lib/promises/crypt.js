"use strict";
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const bluebird = require("bluebird");

module.exports = {
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
