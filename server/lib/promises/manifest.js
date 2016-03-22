import fs from "fs";
import Promise from "bluebird";

const accessManifest = function* (filename) {
    let manifest;

    const timeout = setTimeout(() => {
        throw new Error(`Unable to load ${filename}`);
    }, 60 * 1000);

    try {
        manifest = fs.accessSync(path, fs.F_OK);
        clearTimeout(timeout);
    }
    catch (err) {
        yield setTimeout(() => { accessManifest(filename); }, 1000);
    }

    return manifest;
};

//export function readManifest(filename) {
//    return new Promise((resolve, reject) => {
//        try {
//            const manifest = accessManifest(filename);
//            return resolve(JSON.parse(manifest));
//        }
//        catch (err) {
//            return reject(err);
//        }
//    });
//}
export function* readManifest(filename) {
    try {
        const manifest = yield* accessManifest(filename);
        return JSON.parse(manifest);
    }
    catch (err) { throw err; }
}
