const path = require("path");
const nodemon = require("gulp-nodemon");

module.exports = function() {
    nodemon({
        script: path.resolve(__dirname, "..", "public", "server.js"),
        watch: [path.resolve(__dirname, "..", "server")],
        env: {
            "NODE_ENV": "development",
            "PORT": 8000,
        },
        ext: "js hjs"
    })
    .on("restart", () => {
        console.log("Server restarted");
    });
};
