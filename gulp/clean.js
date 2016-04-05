const del = require("del");

module.exports = () => {
    del([
        "!public",
        "public/**/*.js",
        "public/**/*.map",
        "public/**/*.css",
        "public/**/*.json",
        "public/assets/*",
    ]).then((paths) => {
        console.info("Deleted files and folders:\n", paths.join("\n"));
    });
};
