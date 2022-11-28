const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.static(".")); // sirva todos os arquivos estaticos do diretorio atual
app.use(bodyParser.urlencoded({ extended: true })); // se vier algum dado de um submit de um form ele vai pegar os dados e transformar em um obj
app.use(bodyParser.json()); // transforma o json em obj

app.get('/teste', (req, res, next) => res.send('Ok')); // função middleware

// multer vai interpretar o arquivo do upload
const storage = multer.diskStorage({
    destination: function(req, file, callback)
    {
        callback(null, './upload');
    },
    filename: function(req, file, callback)
    {
        callback(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro!')
        }

        res.end('Concluido com sucesso chefe!');
    })
});

// usa o bodyparser para podermos pegar o body da eq
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    });
});

app.get('/parOuImpar', (req, res) => {
    // formas de receber dados do frontend fornecidos pelo express
    // req.body 
    //req.query - dados via url, ex: /parOuImpar?id=1...
    // req.params - poderiamos receber um dados especifico pela url com /parOuImpar/:id (pode ser id, name, email e etc...)
    const par = parseInt(req.query.numero) % 2 === 0;

    res.send({
        resultado: par ? 'par' : 'impar'
    });
});

app.listen(8080, () => console.log('Executing........'));



