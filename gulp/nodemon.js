const path = require("path");
const nodemon = require("gulp-nodemon");

module.exports = (script, watch, ext) => {
    return () => {
        nodemon({
            script,
            watch,
            ext,
        })
        .on("restart", () => {
            console.info("Nodemon restarting server");
        });
    };
};
