const http = require('http');

// com promisses

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, rej) => {
        http.get(url, res => {
            let result = "";
    
            res.on("data", dados => {
                result += dados;
                // os dados chegam parcialmente, entao a cada vez que chegar um dado novo, sera inserido na variavel result
            });
            
            res.on("end", () => {
                try
                {
                    resolve(JSON.parse(result));
                }
                catch(e)
                {
                    rej(e)
                }
            });
            
        });
    });
}


// let nomes = [];

// getTurma("A").then( alunos => {
//     nomes = nomes.concat(alunos.map( aluno => `Turma A: ${aluno.nome}` ));

//     getTurma("B").then( alunos => {
//         nomes = nomes.concat(alunos.map( aluno => `Turma B: ${aluno.nome}` ));
//     })

//     getTurma("C").then( alunos => {
//         nomes = nomes.concat(alunos.map( aluno => `Turma C: ${aluno.nome}` ));
//         console.log(nomes);
//     })
// });

// Outra maneira

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes));

//getTurma("D").catch(e => console.log(e.message));