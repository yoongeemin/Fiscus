const gulp = require("gulp");
const tasks = require("./gulp/index");

gulp.task("clean", tasks.clean);

gulp.task("build:server:dev", ["clean"], tasks.build(require("./webpack/server/server.dev")));
gulp.task("build:server:prod", ["clean"], tasks.build(require("./webpack/server/server.prod")));

gulp.task("run:dev", ["build:server:dev"], tasks.rundev);
