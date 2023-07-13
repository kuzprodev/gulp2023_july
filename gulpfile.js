const { src, dest, watch, parallel } = require('gulp');


const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;

const browserSync = require('browser-sync').create();





function styles(){
    return src('app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({ overrideBrowserslist:
         ['last 10 version'],
            grid: true }))  
    .pipe(sourcemaps.write('maps'))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts(){
    return src([
        'node_modules/swiper/swiper-bundle.js',
        'app/js/**/*.js',
    '!app/js/*.min.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function watching(){
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/js/**/*.js','!app/js/*.min.js'], scripts)
    watch(['app/**/*.html']).on('change', browserSync.reload)
}

function browsersync (){
    browserSync.init({
        server: {
            baseDir: "app/"
        },
        port: 8008,
    });
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;


exports.default = parallel(styles, scripts,  browsersync, watching)