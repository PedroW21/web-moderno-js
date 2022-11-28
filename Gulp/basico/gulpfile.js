const gulp = require('gulp');
const { series, parallel } = require('gulp');

const antes1 = callback => {
    
    console.log('Tarefa antes 1 XD');
    
    return callback();
}

const antes2 = callback => {
    
    console.log('Tarefa antes 2, bora bill');
    
    return callback();
}

function copiar(callback)
{
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt') // qualquer arquivo e pasta que esteja em pastaA e que tenha um .txt vai ser utilizado
        .pipe(gulp.dest('pastaB')); 
        // pipe - serve para fazer transformações (modificar o arquivo, cortando na metade, pegando uma parte, etc...)
    return callback(); //notifica o fim da tarefa pro gulp
}


const fim = callback => {
    
    console.log('Tarefa final gulpzao');
    
    return callback();
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
);
// colocamos um default pq o gulp solicita uma task padrao pra ser a porta de entreda
// Series - executa as funções em serie

// Parallel - executa as tarefas requisitadas em paralelo, enquanto a main fica parada