// Objeto é uma coleção dinamica de pares chave:valor

const produto = new Object;

produto.nome = "Ferro";
produto["marca do produto"] = "Tramotina";
produto.preco = 110;

//console.log(produto);
delete produto.preco;
delete produto["marca do produto"];
//console.log(produto);

const carro = {
    marca: "Tesla",
    modelo: "Model 3",
    valor: 1100000,
    proprietario:
    {
        nome: "Pierre",
        idade: 24,
        endereco: 
        {
            logradouro: "Rua 3 Marias",
            numero: 1234
        }
    },
    condutores: [
        {
            nome: "Mathias",
            idade: 38
        },
        {
            nome: "Enilda",
            idade: 42
        }
    ],
    calcularValorSeguro: function()
    {
        //...
    }
}

//console.log(carro);
carro.proprietario.endereco = 4321;
carro["proprietario"]["endereco"]["logradouro"] = "Rua 3 Maltas";
//console.log(carro);

delete carro.condutores;
console.log(carro);
// console.log(carro.condutores) - retorna undefined | mas se acessarmos algo entro de undefined ele dara erro

