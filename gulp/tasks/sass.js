var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

// gulp.task('sass', ['images', 'assets'], function () {
//   return gulp.src('src/display/sass/*.{sass, scss}')
//     .pipe(sass({
//       compass: true,
//       bundleExec: true,
//       sourcemap: true,
//       sourcemapPath: '../sass'
//     }))
//     .on('error', handleErrors)
//     .pipe(gulp.dest('build/display'));
// });



var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task('sass-display', function () {
    gulp.src('./src/display/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/display/css'))
    .on('error', handleErrors)
    .pipe(gulp.dest('build/display'));
});

gulp.task('sass-controller', function () {
    gulp.src('./src/controller/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/controller/css'))
    .on('error', handleErrors)
    .pipe(gulp.dest('build/controller'));
});

gulp.task('sass', ['sass-display', 'sass-controller']);
