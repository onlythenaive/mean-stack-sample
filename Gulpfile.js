var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    LessPluginAutoprefix = require('less-plugin-autoprefix'),
    LessPluginClean = require('less-plugin-clean-css');

gulp.task('dev', ['browserify', 'less'], function () {

});

gulp.task('browserify', function() {
  gulp.src(['src/main/resources/static/scripts/script-1.js'])
      .pipe(browserify({
        insertGlobals: true,
        debug: false
      }))
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('src/main/resources/static/scripts'));
});

gulp.task('less', function () {
  autoprefix = new LessPluginAutoprefix({
    browsers: ["last 2 versions"]
  });
  clean = new LessPluginClean({
    advanced: true
  });
  gulp.src(['src/main/resources/static/styles/**/*.js'])
      .pipe(less({
        plugins: [autoprefix, clean]
      }))
      .pipe(gulp.dest('src/main/resources/static/styles'));
});

gulp.task('default', ['dev']);
