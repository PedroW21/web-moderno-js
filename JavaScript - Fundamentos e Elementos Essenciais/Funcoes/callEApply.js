function getPreco(imposto = 0, moeda = "R$")
{
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Acer",
    preco: 5000,
    desc: 0.10, 
    getPreco // como foi declarada a função aqui, em seu contexto lexico ela entende o paramentro desc (desconto) e o busca no obj - Clousure
}

global.preco = 20;
global.desc = 0.10;
console.log(getPreco());

console.log(produto.getPreco());

const carro = { preco: 12000, desc: 0.2 }
console.log(getPreco.call(carro)); // execute nesse contexto
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.2, "U$")); // aqui posso passar os paramentros diretamente
console.log(getPreco.apply(carro, [0.2, "U$"])); // aqui tenho q passar os paramentros num array