// Arrow function
const soma = (a,b) => a + b;
console.log(soma(2,3));


// Arrow (this)
const lexico1 = () => console.log(this === exports);
// Em uma função tradicional, o this pode variar de acordo com o contexto, no caso aqui não, jamais irá variar, sempre estara amarrado ao module.exports
// Mesmo se usassemos o bind();

// Default param
function log(texto = "Node")
{
    console.log(texto);
}

log();

// Operador REST (agrupar) ou SPREAD (separar, espalhar)
function total(...nums)
{
    let total = 0;
    nums.forEach(n => total += n);

    return console.log(total);
}

total(5,4,3,2,1);