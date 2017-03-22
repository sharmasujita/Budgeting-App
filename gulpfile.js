"use strict"

const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    lint = require('gulp-eslint'),
    annotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    todo = require('gulp-todo'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css');


let config = {
        paths: {
            js: [
                'src/app/main.js',
                'src/app/components/**/*.js',
                'src/app/layout/**/*.js'
            ],
            sass: 'src/assets/scss/*.scss',
            dist: 'dist'
        }
};

gulp.task('lint', function() {
    gulp.src(config.paths.js)
        .pipe(lint({ configFile: 'eslint.config.json' }))
        .pipe(lint.format())
        .pipe(lint.failAfterError());
});

gulp.task('bundleJs', function() {
    return gulp.src(config.paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(annotate().on('error', util.log))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(uglify({mangle: false}).on('error', util.log))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.dist + '/js'))
});

gulp.task('sass', function() {
    return gulp.src(config.paths.sass)
        .pipe(sass())
        .pipe(concat('main.min.css'))
        .pipe(cleanCss({ debug: true }, function(details) {
            console.log(details.name + " " + details.stats.originalSize);
            console.log(details.name + " " + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest(config.paths.dist + '/css'))

});

gulp.task('watch' , function() {
    gulp.watch(config.paths.js, ['bundleJs']);
    gulp.watch(config.paths.sass, ['sass']);

});

gulp.task('build', ['bundleJs', 'sass'])
gulp.task('default',['build', 'watch']);