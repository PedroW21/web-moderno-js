// implementando um map basico
// Pensar numa implementação especifica do meu depois

Array.prototype.map2 = function(callback)
{
    const newArray = [];

    for (let i = 0; i < this.length; i++) 
    {
        newArray.push(callback(this[i], i, this)) //elemento atual, indice, e o proprio array
    }

    return newArray;
}


const carrinho = [
    {nome: "Borracha", preco: 3.45},
    {nome: "Caderno", preco: 13.90},
    {nome: "Kit de Lapis", preco: 41.22},
    {nome: "Caneta", preco: 7.50}
]

const carrinhoJson = JSON.stringify(carrinho);

// Retornar um array apenas com os preços

const arrPrecos = JSON.parse(carrinhoJson).map(e => `R$${parseFloat(e.preco).toFixed(2).replace(".", ",")}`);

console.log(arrPrecos);

