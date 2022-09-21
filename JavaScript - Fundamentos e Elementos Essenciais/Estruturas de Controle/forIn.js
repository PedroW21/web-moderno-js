const notas = [7.7, 7.1, 6.5, 9.9];

for(i in notas)
{
    console.log(i, notas[i]);
}

const pessoa = {
    nome: "Nanny",
    sobrenome: "Makinsho",
    idade: 21,
    peso: 65
}

for(dados in pessoa)
{
    console.log(dados, pessoa[dados]);
}