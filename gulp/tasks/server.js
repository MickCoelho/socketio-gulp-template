
var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function () {
    //start the server at the beginning of the task
    return;
    server.run({
        port: 3000,
        file: 'server.js'
    });
});
