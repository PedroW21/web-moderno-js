const fs = require("fs");

const caminho = __dirname + "/arquivo.json"

// sincrona

const conteudo = fs.readFileSync(caminho, "utf-8") //read file sincronamente

//console.log(conteudo);

// Assincrono

fs.readFile(caminho, "utf-8", (err, content) => {
    const config = JSON.parse(content);
    console.log(`${config.db.host}:${config.db.port}`);
});

// Outro jeito

const config = require("./arquivo.json");
console.log(config); // ja retorna um obj

// Lendo um diretorio

fs.readdir(__dirname, (err, arq) => {
    console.log("Conteudo da pasta...");
    console.log(arq);
})
