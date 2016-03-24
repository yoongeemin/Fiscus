const webpack = require("webpack");

module.exports = function(config) {
    return function() {
        webpack(config).watch(1000, (err, stats) => {
            if (err) throw new gutil.PluginError("webpack", err);
        });
    };
};
