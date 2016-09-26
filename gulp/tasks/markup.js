var gulp = require('gulp');

gulp.task('markup-display', function() {
  return gulp.src('src/display/htdocs/**')
    .pipe(gulp.dest('build/display'));
});

gulp.task('markup-controller', function() {
  return gulp.src('src/controller/htdocs/**')
    .pipe(gulp.dest('build/controller'));
});

gulp.task('markup', ['markup-display', 'markup-controller']);
