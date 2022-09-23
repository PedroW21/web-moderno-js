// Função que retorna um objeto

// Factory simples
function criarPessoa()
{
    return {
        nome: "Adelmar",
        idade: 12
    }
}

//console.log(criarPessoa()); // sempre que chamado cria uma nova instancia desse objeto

function criarProduto(nome, preco = 0, desconto = 0.1)
{
    return {
        nome,
        preco,
        precoComDesconto: preco * (1 - desconto)
    }
}
// Não é preciso colocar atributo: valor pois o parametro ja pode ser utilizado diretamente
console.log(criarProduto("PlayStation 5", 100));

