import bluebird from "bluebird";
import { readFile } from "fs";

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
    const timeout = bluebird.delay(60 * 1000).then(() => {
        throw new Error(`Unable to load ${filename}`);
    });

    console.log(`Waiting for ${filename} to generate..`);
    return readManifest(filename)
        .then((manifest) => {
            timeout.cancel();
            console.log(`Successfullly loaded ${filename}`);
            return JSON.parse(manifest);
        });
};

