const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

function server(cb)
{
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}

function monitorarArquivos(cb)
{
    // vigia os arquivos html, e se algo mudar chama a task do gupy
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.css', () => gulp.series('appCss')())
    watch('src/**/*.js', () => gulp.series('appJs')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appImgs')())

    return cb();
}

module.exports = {
    monitorarArquivos,
    server
}