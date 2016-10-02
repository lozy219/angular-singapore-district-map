'use strict';

var gulp = require('gulp');
var del = require('del');
var gulpsync = require('gulp-sync')(gulp);
var rename = require('gulp-rename');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var dir = {
  src: 'src',
  dist: 'dist'
};

gulp.task('src', function() {
  return browserify({
      entries: dir.src + '/index.js',
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify()))
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