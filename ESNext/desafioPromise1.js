const fs = require("fs");
const path = require("path");


function extrairConteudo(nomeArquivo)
{
        return new Promise(resolve => {
            const caminho = path.join(__dirname, nomeArquivo);

            fs.readFile(caminho, (err, content) => resolve(content.toString()))
        });
}

extrairConteudo("dados.txt")
.then(text => text.split("\n"))
.then(textSplit => textSplit[0])
.then(console.log);