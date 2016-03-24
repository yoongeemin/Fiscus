const winston = require("winston");
const moment = require("moment");
const DailyRotateTransport = require("winston-daily-rotate-file");

function formatter (options) {
    const timestamp = options.timestamp();
    const level = (options.colorize)
        ? winston.config.colorize(options.level, options.level.toUpperCase())
        : options.level;
    const message = options.message;
    return timestamp + " [" + level + "] " + message;
}

module.exports = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: function() { return moment().format("MM/DD/YYYY HH:mm:ss"); },
            colorize: true,
            formatter,
        }),
        new DailyRotateTransport({
            filename: "public/somefile.log",
            datePattern: ".yyyy.MM.dd",
            formatter,
        }),
    ],
});
