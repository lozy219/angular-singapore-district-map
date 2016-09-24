'use strict';

var gulp = require('gulp');
var del = require('del');
var gulpsync = require('gulp-sync')(gulp);
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var dir = {
  src: 'src',
  dist: 'dist'
};

gulp.task('src', function() {
  return gulp.src([dir.src + '/**/*.js'])
    .pipe(uglify())
    .pipe(rename('ng-sg-district-map.js'))
    .pipe(gulp.dest(dir.dist));
});

gulp.task('clean', function(cb) {
  return del([dir.dist], cb);
});

gulp.task('watch', function() {
  return gulp.watch([dir.src + '/**/*'], ['build']);
});

gulp.task('default', gulpsync.sync([['build'], ['watch']]));

gulp.task('build', gulpsync.sync([['clean'], ['src']]));