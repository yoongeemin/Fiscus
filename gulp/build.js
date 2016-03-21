const webpack = require("webpack");
const gutil = require("gulp-util");

module.exports = function(config) {
    return function(done) {
        webpack(config).run((err, stats) => {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack] ", stats.toString());
            done();
        });
    };
};
