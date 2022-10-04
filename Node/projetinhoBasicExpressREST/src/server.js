const express = require("express");
const db = require("./bancoDeDados");
const bodyParser = require("body-parser");

const port = 3003;
const app = express();

app.use(bodyParser.urlencoded( { extended: true } )); //ira passar por uma func middleware, e caso tenha o padrao urlencoded na requisição (no body) vai fazer um parse e transfor em obj para podermos manipular

app.get("/produtos", (req, res, next) => { // receberemos uma requisição, e responderemos oq ta abaixo
    console.log("Middleware1...");
    next();
});

// se eu colocasse use, qualquer acesso dps de /produtos poderia ser aceito
app.get("/produtos", (req, res, next) => { // receberemos uma requisição, e responderemos oq ta abaixo
    //res.send( {nome: "Notebook Expresso", preco: 2345.21} ) //conversão automatica para JSON

    res.send(db.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
    res.send(db.getProduto(req.params.id)) // params seria o array dos elementos, e escolhemos o .id (link poderia ser /produtos/:id/:nome);
});

app.post("/produtos", (req, res, next) => {
   
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });

    res.send(produto); // gera um JSON

});


app.put("/produtos/:id", (req, res, next) => {
   
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    });

    res.send(produto); // gera um JSON

});

app.delete("/produtos/:id", (req, res, next) => {
    
    const produto = db.excluirProduto(req.params.id);

    res.send(produto);

});


app.listen(port, () => {
    console.log("Server executing, port: ", + port);
}); //ficara de "olho" na porta, caso alguem faça uma solicitação, sera respondida

