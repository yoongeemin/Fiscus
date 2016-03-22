import fs from "fs";
import bluebird from "bluebird";
import { readFileSync} from "fs";

const readManifest = function(filename) {      
    try {
        const manifest = readFileSync(filename);
        console.log(`Successfullly loaded ${filename}`);
        return manifest;
    }
    catch (err) {
        setTimeout(() =?  { readManifest(filename); }, 1000);
    }
};

export function parseManifest(filename) {
    return bluebird((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error(`Unable to load ${filename}`));
        }, 60 * 1000);

        console.log(`Generating ${filename}...`);
        const manifest = readManifest(filename);
        resolve(JSON.parse(manifest));
    });
};
