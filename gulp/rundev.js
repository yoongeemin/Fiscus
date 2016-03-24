const bluebird = require("bluebird");
const path = require("path");
const nodemon = require("gulp-nodemon");
const fs = require("fs");
const LOGGER = require("../logger");

function getServerManifest(filename) {
    return bluebird.promisify(fs.readFile)(filename)
        .then(function(manifest) {
            manifest = JSON.parse(manifest);
            if (manifest.server) {
                return manifest.server.js;
            }
            LOGGER.error(`${filename} does not contain server manifest`);
            throw new Error(`${filename} does not contain server manifest`);
        })
        .catch(function() {
            return bluebird.delay(1000).then(function() {
                return getServerManifest(filename);
            });
        });
}

module.exports = function() {
    const filename = path.resolve(__dirname, "..", "public", "manifest.json");

    const timeout = setTimeout(() => {
        LOGGER.error(`Unable to load ${filename}`);
        throw new Error(`Unable to load ${filename}`);
    }, 60 * 1000);

    getServerManifest(filename).then(function(server) {
        clearTimeout(timeout);
        LOGGER.info(`Successfullly loaded ${filename}`);
        nodemon({
            script: path.resolve(__dirname, "..", "public", server),
            watch: [path.resolve(__dirname, "..", "server")],
            env: {
                "NODE_ENV": "development",
                "PORT": 8080,
            },
            ext: "js hjs",
        })
        .on("restart", () => {
            LOGGER.info("Nodemon restarting server");
        });
    });
};
