

function retornaElemento(arr)
{
    return arr[2];
}

function adicionaTexto(str)
{
    return str + " e um Ze Cueca!";
}

new Promise(function(resolve) {
    resolve(["Ana", "Bia", "Nine", "Bulba"]);
})
.then(retornaElemento)
.then(adicionaTexto)
.then(console.log);
