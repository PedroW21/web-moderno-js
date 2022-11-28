// dependencias externas
const gulp = require('gulp');
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function depsCss()
{
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifyCss({ 'uglyComments': false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'));
}

function depsFonts(cb)
{
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'));
}


module.exports = {
    depsCss,
    depsFonts
}