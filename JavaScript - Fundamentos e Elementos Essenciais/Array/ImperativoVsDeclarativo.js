const alunos = 
[
    { nome: "Tadeu", nota: 6.6 },
    { nome: "Ozório", nota: 8.7 },
    { nome: "Tadeu", nota: 5.9 },
]

// Abordagem imperativa - fazer o passo a passo (como é feito algo (ao pe da letra), não o que)

let total1 = 0;

for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}

console.log((total1/alunos.length).toFixed(2));

// Abordagem declarativa - podemos ter mais reusabilidade (voce so declara o que tem que ser feito, e por baixo dos panos ele faz em detalhes (que não me interessam))

const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma); //reduce tem a ideia de agregar os valores

console.log((total2/alunos.length).toFixed(2));