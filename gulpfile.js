'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
const autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var concat = require('gulp-concat');

// Uglify (js minify)
gulp.task('compress', function () {
  return pipeline(
        gulp.src('./app/lib/*.js'),
        uglify(),
        gulp.dest('./app/lib/ulgified/')
  );
});


// Concat JS

gulp.task('scripts', function() {
  return gulp.src('./app/lib/ulgified/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./app/js/'));
});


// Sass to CSS compiler
gulp.task('sass', function() {
    return gulp.src('./app/scss/*.scss')
      .pipe(sass({sourcemap: true}))
      .on('error', sass.logError)
      .pipe(gulp.dest('./app/css/'));
  })

// Autoprefixer
gulp.task('prefix', () =>
  gulp.src('./app/css/*.css')
      .pipe(autoprefixer({
          browsers: ['last 10 versions'],
          cascade: false
  }))
  .pipe(gulp.dest('./app/css/'))
);

// Minifying CSS
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('./app/css/*.css')
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest('./app/css/'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

// Reload page after changes
    gulp.watch("app/*.html").on("change", reload);
    gulp.watch("app/css/*.css").on("change", reload);
});

gulp.task('default', gulp.series('compress', 'scripts', 'sass', 'prefix', 'minify-css', 'browser-sync'));