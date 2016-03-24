import winston from "winston";
import moment from "moment";
import DailyRotateTransport from "winston-daily-rotate-file";

const formatter = (options) => {
    const timestamp = options.timestamp();
    const level = (options.colorize)
        ? winston.config.colorize(options.level, options.level.toUpperCase())
        : options.level;
    const message = options.message;
    return `${timestamp} [${level}] ${message}`
};

export const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: () => { return moment().format("MM/DD/YYYY HH:mm:ss"); },
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
