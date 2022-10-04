const fs = require("fs");

// Vamos persistir esse obj (persistir = salvar no disco nesse contexto)
const produto = 
{
    nome: "Celular",
    preco: 1500,
    desconto: 0.05
}

fs.writeFile( __dirname + "/arquivoGerado.json", JSON.stringify(produto), err => console.log(err || "Arquivo salvo") );

