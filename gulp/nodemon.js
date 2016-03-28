const path = require("path");
const nodemon = require("gulp-nodemon");

module.exports = function(env, port) {
    return function() {
        nodemon({
            script: path.resolve(__dirname, "..", "server", "server.js"),
            watch: [path.resolve(__dirname, "..", "server", "**")],
            env: {
                "NODE_ENV": env,
                "HOSTNAME": "http://localhost",
                "PORT": port,
            },
            ext: "js hjs",
        })
        .on("restart", () => {
            console.info("Nodemon restarting server");
        });
    };
};
