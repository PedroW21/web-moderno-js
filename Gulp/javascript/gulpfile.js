const gulp = require('gulp');
const { series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformacaoJS(cllbck)
{
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, // não quero comentarios no arquivo
            presets: ['env'] //pega o a versao mais nova do js
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'));
    // return cllbck(); podemos retornar diretamente o resultado, sem precisar chamar a callback
}

function fim(cb)
{
    console.log('FIM !! HAPPY ENDING ;D');
    return cb();
}

exports.default = series(transformacaoJS, fim);