// Clousure é o escopo criado quando uma função é declarada (o escopo que esta em volta da função, que a envolve)
// O que permite a função acessar e manipular variaveis externas a função

// Contexto legico em ação

const  x = "Global";

function fora()
{
    const x = "dentro da func fora";
    return function()
    {
        return x;
    }
}

const teste = fora();

console.log(teste());