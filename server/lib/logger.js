const path = require("path");
const moment = require("moment");
const winston = require("winston");
const DailyRotateTransport = require("winston-daily-rotate-file");

const formatter = (options) => {
    const timestamp = options.timestamp();
    const level = winston.config.colorize(options.level, options.level.toUpperCase());
    const message = options.message;
    return `${timestamp} [${level}] ${message}`;
};

module.exports = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: () => { return moment().format("MM/DD/YYYY HH:mm:ss"); },
            formatter,
        }),
        new DailyRotateTransport({
            filename: path.resolve(__dirname, "..", "..", "logs", "server.log"),
            datePattern: ".yyyy.MM.dd",
        }),
    ],
});
