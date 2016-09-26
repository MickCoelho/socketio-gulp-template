/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js automatically reloads any files
     that change within the directory it's serving from
*/

var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('src/display/scss/**', ['sass']);
  gulp.watch('src/display/images/**', ['images']);
  gulp.watch('src/display/assets/**', ['assets']);
  gulp.watch('src/display/htdocs/**', ['markup']);

  gulp.watch('src/controller/scss/**', ['sass']);
  gulp.watch('src/controller/images/**', ['images']);
  gulp.watch('src/controller/assets/**', ['assets']);
  gulp.watch('src/controller/htdocs/**', ['markup']);
});
