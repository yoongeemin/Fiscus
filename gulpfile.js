const gulp = require("gulp");
const path = require("path");
const tasks = require("./gulp/index");

// Clean
gulp.task("clean", tasks.clean);


// Set environment variables
gulp.task("env:dev", tasks.env("DEV", "http://localhost", 8080));
gulp.task("env:prod", tasks.env("PROD", "http://localhost", 8080));


// Build
gulp.task("build:app:dev", tasks.build(require("./webpack/app/app.dev")));
gulp.task("build:app:prod", tasks.build(require("./webpack/app/app.prod")));
gulp.task("build:server:dev", tasks.build(require("./webpack/server/server.dev")));
gulp.task("build:server:prod", tasks.build(require("./webpack/server/server.prod")));


// Lint
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
        path.resolve(__dirname, "server", "**/*.jsx"),
        "!vendor/**",
    ],
    path.resolve(__dirname, ".eslintrc.react")
));
gulp.task("lint", ["lint:server", "lint:app"], (done) => { done(); });


// Run
gulp.task("dev", ["env:dev", "clean", "lint", "build:server:dev"], tasks.nodemon(
    path.resolve(__dirname, "server", "server.js"),
    [path.resolve(__dirname, "server", "**")],
    "js hjs"
));
