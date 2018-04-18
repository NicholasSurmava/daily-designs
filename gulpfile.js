'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const sync = require('browser-sync');
const min = require('gulp-uglify');
const min_img = require('gulp-imagemin');
const prefix = require('gulp-autoprefixer');

gulp.task('default', function() {
  // place code for your default task here
});
 
// SASS to CSS
gulp.task('sass', function () {
  return gulp.src('./src/styles/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/sass/**/*.scss', ['sass']);
});

// Minify JS
gulp.task('min', function () {

});

// Minify Images
gulp.task('min_img', function () {

});

// auto prefixer
gulp.task('prefix', function() {

});

// Dev Server
gulp.task('dev', function () {
  
});

// Deploy
gulp.task('deploy', function () {

});

// Daily Design
gulp.task('dd', function () {

});