const alunos = 
[
    {nome: "Pierre", nota: 90, bolsista: false},
    {nome: "Carlinhos", nota: 63, bolsista: true},
    {nome: "Debora", nota: 59, bolsista: true},
    {nome: "Octopuis", nota: 23, bolsista: true},
    {nome: "Milenna", nota: 42, bolsista: false},
    {nome: "Tavares", nota: 33, bolsista: false},
    {nome: "Robertinho", nota: 43, bolsista: false},
    {nome: "Cleitao", nota: 63, bolsista: true},
    {nome: "Lord", nota: 86, bolsista: true},
    {nome: "Tampico", nota: 76, bolsista: true},
    {nome: "Fera", nota: 87, bolsista: false},
]

// Desafio 1 - Implementar um reduce rudimentar dizendo se todos os alunos são bolsistas

const desafio1 = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map( e => e.bolsista).reduce(desafio1));

//Desafio 2 - Implementar um reduce rudimentar dizendo se algum aluno é´bolsista

const desafio2 = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map( e => e.bolsista ).reduce(desafio2));

