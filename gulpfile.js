const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compressSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass ({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImg () {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJS() {
    return gulp.src('./source/scripts/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

exports.sass = compressSass;
exports.imagemin = comprimeImg;
exports.uglify = comprimeJS;