const gulp = require('gulp');
const { series, parallel } = require('gulp');
const { appHtml, appCss, appJs, appImgs } = require('./gulpTasks/app');
const { depsCss, depsFonts } = require('./gulpTasks/deps');
const { monitorarArquivos, server } = require('./gulpTasks/servidor');

module.exports.default = series(
    parallel(
        series(
            appHtml,
            appCss,
            appJs,
            appImgs
        ),
        series(
            depsCss, 
            depsFonts
        )
    ),
    server,
    monitorarArquivos    
);
