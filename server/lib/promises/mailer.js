"use strict";
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const bluebird = require("bluebird");

module.exports = {
    sendEmail: function(host, port, user, pass, to, subject, html) {
        return new bluebird((resolve, reject) => {
            const transport = nodemailer.createTransport(smtpTransport({
                host,
                port,
                auth: {
                    user,
                    pass,
                },
                secureConnection: false,
            }));

            transport.sendMail({
                from: user,
                to,
                subject,
                html,
            }, (err, info) => {
                if (err) {
                    return reject(err);
                }
                return resolve(info.response);
            });
        });
    },
};
