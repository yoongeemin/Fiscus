import bluebird from "bluebird";
import { readFile } from "fs";

const parseManifest = function(filename, chunkname) {
    return bluebird.promisify(readFile)(filename)
        .then((manifest) => {
            const chunk = JSON.parse(manifest)[chunkname];
            if (chunk) { return chunk; }
            return bluebird.delay(1000).then(() => {
                return parseManifest(filename, chunkname);
            });
        })
        .catch(() => {
            LOGGER.error(`Unable to load ${filename}`);
            throw new Error(`Unable to load ${filename}`);
        });
};

export function loadChunk(filename, chunkname) {
    const timeout = setTimeout(() => {
        LOGGER.error(`Unable to load ${filename}`);
        throw new Error(`Unable to load ${filename}`);
    }, 60 * 1000);

    LOGGER.info(`Loading ${filename}`);
    return parseManifest(filename, chunkname)
        .then((chunk) => {
            clearTimeout(timeout);
            LOGGER.info(`Successfullly loaded ${filename}`);
            return chunk;
        });
}
