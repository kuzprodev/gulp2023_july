const { src, dest, watch } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

const uglify = require('gulp-uglify-es').default;






function styles(){
    return src('app/scss/**/*.scss')
    .pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(dest('app/css'))
}

function scripts(){
    return src('app/js/**/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
}

function watching(){
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/js/**/*.js'], scripts)
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;