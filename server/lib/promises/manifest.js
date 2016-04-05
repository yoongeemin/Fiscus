const bluebird = require("bluebird");
const readFile = require("fs").readFile;

const openManifest = (filename) => {
    return bluebird.promisify(readFile)(filename)
        .then((manifest) => { return manifest; })
        .catch(() => {
            return bluebird.delay(1000).then(() => {
                return openManifest(filename);
            });
        });
};

module.exports = {
    loadManifest: (filename) => {
        const timeout = setTimeout(() => {
            throw new Error(`Unable to load ${filename}`);
        }, 60 * 1000);

        return openManifest(filename)
            .then((manifest) => {
                clearTimeout(timeout);
                return JSON.parse(manifest);
            });
    },
};
