const produtos = 
[
    { nome: "Laptop", preco: 2500, fragil: true},
    { nome: "Mouse", preco: 250, fragil: true},
    { nome: "Cadeira de ferro", preco: 154, fragil: false},
    { nome: "Mesa de aço", preco: 1750, fragil: false},
    { nome: "Panela Tramotina", preco: 75, fragil: false},
    { nome: "Esponja de aço", preco: 1.7, fragil: false},
    { nome: "Monitor 4K, HDR, OLED, 144Hz", preco: 1550, fragil: true},
]

// Meu jeito
console.log(produtos.filter(function(produto){
    return produto.fragil === true && produto.preco > 1000;
}))

//2o jeito

const caro = produto => produto.preco > 1000;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));

