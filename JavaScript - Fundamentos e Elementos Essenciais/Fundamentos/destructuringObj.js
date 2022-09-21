const pessoa = {
    nome: "Iriney",
    idade: 32,
    endereco:
    {
        logradouro: "Rua 99",
        numero: "142"
    }
}

const { nome, idade } = pessoa; // destructuring - nome idade ficam acessiveis como variaveis, ele é "retirado" de pessoa
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; // 2o jeito, criando variaveis que queremos

const { sobrenome, bemHumorado = true } = pessoa;
console.log(sobrenome, bemHumorado);

const { endereco: { logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);

//const { ag: {conta}} = pessoa; - daria erro pois estamos tentado acessar algo nulo ou indefeinido