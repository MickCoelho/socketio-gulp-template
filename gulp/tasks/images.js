var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');

gulp.task('images-display', function() {
  var dest = './build/display/images';

  return gulp.src('./src/display/images/**')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(dest));
});



gulp.task('images-controller', function() {
  var dest = './build/controller/images';

  return gulp.src('./src/controller/images/**')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(dest));
});





gulp.task('assets', function() {
  var dest = './build/display/assets';
  return gulp.src('./src/display/assets/**')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(dest));
});

gulp.task('textures', function() {
  return gulp.src(['./src/display/textures/**/*'])
          .pipe(gulp.dest('./build/display/textures/'));
});

gulp.task('obj', function() {
  return gulp.src(['./src/display/obj/**/*'])
          .pipe(gulp.dest('./build/display/obj/'));
});

gulp.task('js', function() {
  return gulp.src(['./src/display/js/**/*'])
          .pipe(gulp.dest('./build/display/js/'));
});


gulp.task('images', ['images-display', 'images-controller', 'assets', 'textures', 'obj', 'js'])
