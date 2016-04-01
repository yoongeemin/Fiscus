const webpack = require("webpack");
const gutil = require("gulp-util");

module.exports = (config) => {
    return (done) => {
        webpack(config).run((err) => {
            if (err) throw new gutil.PluginError("webpack", err);
            done();
        });
    };
};
