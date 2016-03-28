"use strict";
const bluebird = require("bluebird");
const readFile = require("fs").readFile;
const LOGGER = require("../logger");

const openManifest = function(filename) {
    return bluebird.promisify(readFile)(filename)
        .then((manifest) => { return manifest; })
        .catch(() => {
            return bluebird.delay(1000).then(() => {
                return openManifest(filename);
            });
        });
};

module.exports = {
    loadManifest: function(filename) {
        const timeout = setTimeout(() => {
            LOGGER.error(`Unable to load ${filename}`);
            throw new Error(`Unable to load ${filename}`);
        }, 60 * 1000);

        LOGGER.info(`Loading ${filename}`);
        return openManifest(filename)
            .then((manifest) => {
                clearTimeout(timeout);
                LOGGER.info(`Successfullly loaded ${filename}`);
                return JSON.parse(manifest);
            });
    },
};
