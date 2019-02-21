var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin');

sass.compiler = require('node-sass');

var jsFiles = 'js/*.js';

gulp.task('copy:index', function() {
    return gulp.src('index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('copy:images', function() {
    return gulp.src('images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist'))
});


gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
    gulp.watch(jsFiles, ['scripts']);
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('polyfill/*.scss', ['polyfill']);
    gulp.watch('index.html', ['copy:index']);
});

gulp.task('default', ['scripts', 'sass', 'watch', 'copy:index', 'copy:images']);