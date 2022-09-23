const notas = [7.7, 8.6, 9.5, 10, 4.5, 3.2, 1.2, 5.4, 3.9, 6.6];

//sem calback

let notasBaixas = [];

for (let i = 0; i < notas.length; i++)
{
    if(notas[i] <= 7) notasBaixas.push(notas[i]);
}

console.log("Notas sem callback: ", notasBaixas);

// Com callback

notasBaixas = notas.filter(function(nota){
    return nota < 7;
});

console.log("Notas usando callback: ", notasBaixas);

// Usando arrow function

const notasBaixas2 = notas.filter((nota) => nota <= 7);

console.log("Notas usando arrow function: ", notasBaixas2);
