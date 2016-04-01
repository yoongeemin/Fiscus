const gulp = require("gulp");
const path = require("path");
const tasks = require("./gulp/index");

gulp.task("clean", tasks.clean);

gulp.task("build", ["clean"], tasks.build(require("./webpack/dev")));

gulp.task("lint:server", tasks.lint(
    [
        path.resolve(__dirname, "server", "**/*.js"),
        path.resolve(__dirname, "*.js"),
        "!node_modules/**",
    ],
    path.resolve(__dirname, ".eslintrc.es5")
));

gulp.task("lint:app", tasks.lint(
    [
        path.resolve(__dirname, "app", "**/*.js"),
        path.resolve(__dirname, "app", "**/*.jsx"),
        "!vendor/**",
    ],
    path.resolve(__dirname, ".eslintrc.react")
));

gulp.task("lint", ["lint:server", "lint:app"], (done) => { done(); });

gulp.task("dev", ["clean", "lint"], tasks.nodemon("development", 8080));
