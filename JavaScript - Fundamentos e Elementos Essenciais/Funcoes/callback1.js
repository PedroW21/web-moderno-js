const fabricantes = ["mercedez", "volvo", "hyundai", "audi", "bmw"];

function imprimir(nome, indice)
{
    console.log(`${indice+1} - ${nome}`);
}

fabricantes.forEach(imprimir);

// callback - é passada uma função e que quando um evento acontecer ela é invocada (evento = clique, loop e etc...)