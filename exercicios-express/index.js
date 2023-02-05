const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const saudacao = require('./saudacaoMid');
const usuarioApi = require('./api/usuario');
require('./api/produto')(app, 'com param!'); // jeito diferente de importar modulos no node e o utilizar

// pre flight request - requisição do tipo option
// qual meotodo esta disponivel naquele endpoint
app.listen(3000, () => {
  console.log("Backend executando...");
});

app.use(bodyParser.text()) //interpreta texto
app.use(bodyParser.json()) // interpreta json no body da req
app.use(bodyParser.urlencoded({ extended: true })) //interpreta dados alem dos padroes

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

//POST - passando parametros pela query (no body da requisição)
app.post('/corpo', (req, res) => {
    // let corpo = '';
    // req.on('data', function(parte)
    // {
    //     corpo += parte;
    // })

    // req.on('end', function()
    // {
    //     res.send(corpo);
    // })

    /*UTILIZANDO O BODY PARSER*/
    res.send(req.body); //.BODY - criado pelo body parser nas primeiras linha da aplicação
})

// passando parametros pela query (na url com ...?atrib1=valor&atrb2=valor2)
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo} | ano = ${req.query.ano}`)
})

// pegando o id da url do navegador, :id signifca q esse dado é significativo
app.get('/clientes/:id', (req, res, next) => {
    res.send(`Cliente ${req.params.id} foi selecionado!`)
})


app.use(saudacao('Pierre')); // considera uma função middleware --- PARECIDO COMO USAMOS O BODY PARSER

app.use('/jsonConteudo', (req, res, next) => {
    console.log('Sera que fui chamado brother? Acho que sim')
    next() //vai pra proxima função ai chefe, ja terminei minha execução (pode ser usado pra validar primeiro um usuario e so dps ir pro fonercimento de infos)
})


app.get("/jsonConteudoCompleto", (req, res) => {
  res.send({
    data: [
      { nome: "Apple", preco: 1198120 },
      { nome: "Meta", preco: 1098333 },
      { nome: "Alphabet", preco: 1056987 }
    ],
    count: 30, //quantos reqistros tem
    skip: 0, //tamo na pagina 0, mas quantas paginas tem na aplicação
    limit: 3, //limitados a nossa consulta em 3 naquela pagina (3 registros)
    status: 200
  });
});

app.get("/jsonConteudo", (req, res) => {
  res.json([
    { nome: "Apple", preco: 1198120 },
    { nome: "Meta", preco: 1098333 },
    { nome: "Alphabet", preco: 1056987 },
  ]);
});

app.post("/testeDePost", (req, res) => {
  res.send("Post deu certo brother");
});

app.use("/test", (req, res) => {
  res.send("<b>testado</b>, tudo certo chefe");
});

// o use atende qualquer tipo de req
app.use((req, res) => {
  res.send("<b>tudo</b> certo chefe");
});
