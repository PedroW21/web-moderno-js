const http = require('http');

// com async/await

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

// Recurso do ES8

let obterAlunos = async () => {
    const turmaA = await getTurma("A");
    const turmaB = await getTurma("B");
    const turmaC = await getTurma("C");

    return [].concat(turmaA, turmaB, turmaC)
} // retorna um obj asyncFunction

obterAlunos()
.then( alunos => alunos.map( a => a.nome ))
.then( nomes => console.log(nomes));