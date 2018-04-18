'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('default', function() {
  // place code for your default task here
});

// SASS to CSS
gulp.task('sass', function () {
  return gulp.src('./src/styles/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'))
    .pipe(reload( {stream:true }));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/sass/**/*.scss', ['sass']);
});

// hotreload dev server. 
// Opens up to LAN. Check firewall rules if you can't connect.
gulp.task('serve', ['sass'], function () {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });

  gulp.watch('src/styles/scss/*.scss', ['sass']);
});

// Deploy
gulp.task('deploy', function () {

});

// Daily Design
gulp.task('dd', function () {

});

