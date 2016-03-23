import bluebird from "bluebird";
import { readFile } from "fs";
import { logger } from "../logger";

const readManifest = function(filename) {
    return bluebird.promisify(readFile)(filename)
        .then((manifest) => { return manifest; })
        .catch(() => {
            return bluebird.delay(1000).then(() => {
                return readManifest(filename);}
            );
        });
};

export function parseManifest(filename) {
    const timeout = setTimeout(() => {
        logger.error(`Unable to load ${filename}`);
        throw new Error(`Unable to load ${filename}`);
    }, 30 * 1000);

    logger.info(`Waiting for ${filename} to generate..`);
    return readManifest(filename)
        .then((manifest) => {
            clearTimeout(timeout);
            logger.info(`Successfullly loaded ${filename}`);
            return JSON.parse(manifest);
        });
}
