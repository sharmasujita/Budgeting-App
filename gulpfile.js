"use strict"

const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    lint = require('gulp-eslint'),
    annotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    todo = require('gulp-todo');

let config = {
        paths: {
            js: [
                'src/app/main.js',
                'src/app/components/**/*.js',
                'src/app/layout/**/*.js'
            ],
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

gulp.task('default',['bundleJs']);