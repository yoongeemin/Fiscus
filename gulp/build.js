const webpack = require("webpack");

module.exports = function(config) {
    return function(done) {
        webpack(config).run((err, stats) => {
            if (err) throw new gutil.PluginError("webpack", err);
            done();
        });
    };
};
