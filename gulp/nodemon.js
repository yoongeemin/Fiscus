const nodemon = require("gulp-nodemon");

module.exports = (env, script, watch, ext) => {
    return () => {
        nodemon({
            script,
            watch,
            ext,
            env,
        })
        .on("restart", () => {
            console.info("Nodemon restarting server");
        });
    };
};
