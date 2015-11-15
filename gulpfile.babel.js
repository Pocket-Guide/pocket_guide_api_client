import gulp from 'gulp';
import del from 'del';

var $ = require('gulp-load-plugins')();

gulp.task(
  "compile",
  [
    'clean',
    'compile-es6'
  ]
);

gulp.task("compile-es6", () => {
  gulp.src('src/**/*.js')
      .pipe($.plumber())
      .pipe($.babel())
      .pipe(gulp.dest("dist"))
});

gulp.task("clean", () => {
  del("./dist/**/*")
});

gulp.task("watch", () =>{
  gulp.watch('src/**/*', ['compile'])
});
