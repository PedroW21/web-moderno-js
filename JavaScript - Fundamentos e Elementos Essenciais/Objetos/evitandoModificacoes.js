// Object.preventExtensions

const prod = Object.preventExtensions({
    nome: "Batedeira",
    preco: 259.90,
    promocao: false,
    vencimento: "12/12/2025"
});


console.log("Extensivel: ", Object.isExtensible(prod));

prod.nome = "Liquidificador";
prod.preco = "129.90";
prod.promocao = true;
prod.descricao = "ZYX AAA ZZ"

delete prod.vencimento;

console.log(prod); // Podemos alterar o objeto, mas na adicionar novos atributos

// Object.seal - não remove nem adiciona novos elementos, so pode alterar

const pessoa = {nome: "Ju", idade: 56};
Object.seal(pessoa);

pessoa.altura = 1.90;
pessoa.idade = 26;
delete pessoa.nome;

console.log()
console.log("Selado: ", Object.isSealed(pessoa));
console.log(pessoa);

// Object.freeze - não moidifica, não deleta, não adiciona (todos os atributos de writeable = false)
