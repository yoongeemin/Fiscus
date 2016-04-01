const gulp = require("gulp");
const eslint = require("gulp-eslint");

module.exports = (paths, config) => {
    return () => {
        return gulp.src(paths)
            .pipe(eslint({ config }))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    };
};
