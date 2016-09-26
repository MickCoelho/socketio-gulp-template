var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {

    browserSync.init(['build/display/**', 'build/controller/**'], {
        port: 1337,
        open: false,
        server: {
            baseDir: ['build', 'src']
        }
    });


});
