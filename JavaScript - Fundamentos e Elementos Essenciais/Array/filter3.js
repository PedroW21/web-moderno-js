Array.prototype.filter2 = function(callback)
{
    const newArr = [];

    for(let i =0; i < this.length; i++)
    {
        if(callback(this[i], i, this))
        {
            newArr.push(this[i]);
        }

        return newArr;
    }
}


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


const caro = produto => produto.preco > 1000;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));
