const gulp = require("gulp");
const path = require("path");
const tasks = require("./gulp/index");

// Clean
gulp.task("clean", tasks.clean);


// Set environment variables
gulp.task("env:dev", tasks.env("DEV", "http://www.localhost.com", 8080));
gulp.task("env:prod", tasks.env("PROD", "http://www.localhost.com", 8080));


// Build
gulp.task("build:app:dev", tasks.build(require("./webpack/app/app.dev.js")));
gulp.task("build:app:prod", tasks.build(require("./webpack/app/app.prod.js")));
gulp.task("build:server:dev", tasks.build(require("./webpack/server/server.dev.js")));
gulp.task("build:server:prod", tasks.build(require("./webpack/server/server.prod.js")));


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
gulp.task("dev", ["clean", "lint", "env:dev", "build:server:dev"], tasks.nodemon(
    path.resolve(__dirname, "server", "server.js"),
    [path.resolve(__dirname, "server", "**")],
    "js hjs"
));
//// Run
//gulp.task("dev", ["clean", "lint", "env:dev"], tasks.nodemon(
//    path.resolve(__dirname, "server", "server.js"),
//    [path.resolve(__dirname, "server", "**")],
//    "js hjs"
//));
