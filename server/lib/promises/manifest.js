import bluebird from "bluebird";
import { readFile } from "fs";

//const readManifest = (filename) => {
//    return new bluebird((resolve) => {
//        try {
//            const manifest = readFileSync(filename);
//            console.log(`Successfullly loaded ${filename}`);
//            return resolve(manifest);
//        }
//        catch (err) {
//            setTimeout(() => {
//                readManifest(filename);
//            }, 1000);
//        }
//    });
//};

const readManifest = (filename) => {
    return bluebird.promisify(readFile)(filename)
    .then((manifest) => {
        console.log(`Successfullly loaded ${filename}`);
        return manifest;
    })
    .catch(() => {
        return bluebird.delay(1000).then(() => { readManifest(filename); });
    });
};

export function parseManifest(filename) {
    //return new bluebird((resolve, reject) => {
    //    const timeout = setTimeout(() => {
    //        return reject(new Error(`Unable to load ${filename}`));
    //    }, 60 * 1000);
    //
    //    console.log(`Generating ${filename}...`);
    //    readManifest(filename).then((manifest) => {
    //        clearTimeout(timeout);
    //        return resolve(JSON.parse(manifest));
    //    });
    //});

    const timer = setTimeout(() => {
        throw new Error(`Unable to load ${filename}`);
    }, 60 * 1000);

    console.log(`Waiting for ${filename} to generate..`);
    readManifest(filename).then((manifest) => {
        console.log("manifest: " + manifest);
    }).catch((e) => { console.log(e); });

    //return bluebird.join(timer, reader, ());
}
