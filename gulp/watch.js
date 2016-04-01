const webpack = require("webpack");
const gutil = require("gulp-util");

module.exports = (config) => {
    return () => {
        webpack(config).watch(1000, (err, stats) => {
            if (err) throw new gutil.PluginError("webpack", err);
        });
    };
};
