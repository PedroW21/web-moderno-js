const http = require('http');

// sem promisses

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    http.get(url, res => {
        let result = "";

        res.on("data", dados => {
            result += dados;
            // os dados chegam parcialmente, entao a cada vez que chegar um dado novo, sera inserido na variavel result
        })
        
        res.on("end", () => {
            callback(JSON.parse(result));
        })
    });
}


let nomes = [];

getTurma("A", alunos => {
    nomes = nomes.concat(alunos.map( aluno => `Turma A: ${aluno.nome}` ));

    getTurma("B", alunos => {
        nomes = nomes.concat(alunos.map( aluno => `Turma B: ${aluno.nome}` ));
    })

    getTurma("C", alunos => {
        nomes = nomes.concat(alunos.map( aluno => `Turma C: ${aluno.nome}` ));
        console.log(nomes);
    })
});

