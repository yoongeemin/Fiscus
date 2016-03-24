const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const url = require("url");

const extensions = ["js", "css"];

function extractExtension(asset) {
    const ext = path.extname(
        url.parse(asset).pathname
    );
    return ext ? ext.slice(1) : null;
}

function ManifestPlugin(options) {
    this.options = _.merge({
        path: ".",
        filename: "manifest.json",
    }, options);
}

ManifestPlugin.prototype.apply = function(compiler) {
    const options = this.options;

    compiler.plugin("done", function(stats) {
        const filename = path.join(options.path, options.filename);

        fs.readFile(filename, function(err, file) {
            var manifest = _.reduce(stats.toJson().assetsByChunkName, function(chunkMap, assets, name) {
                if (!_.isArray(assets)) { assets = [assets]; }
                chunkMap[name] = _.reduce(assets, function(extMap, asset) {
                    const ext = extractExtension(asset);
                    if (_.includes(extensions, ext)) {
                        extMap[ext] = asset;
                    }
                    return extMap;
                }, {});
                return chunkMap;
            }, {});

            // Manifest already exists
            if (!err) {
                manifest = _.merge(manifest, JSON.parse(file));
            }

            fs.writeFile(filename, JSON.stringify(manifest), function() { });
        });
    });
};

module.exports = ManifestPlugin;
