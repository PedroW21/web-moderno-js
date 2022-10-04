// Não tem nativamente no JS - Flatmap = array + concat

const escola = 
[
    {
        nome: "Turma A1",
        alunos:
        [
            { nome: "Gus", nota: 9.3 },
            { nome: "Marie", nota: 7.2 }
        ]
    },
    {
        nome: "Turma B1",
        alunos:
        [
            { nome: "Clarice", nota: 6.6 },
            { nome: "Mario", nota: 8.4 }
        ]
    }
]

const getNomaAluno = aluno => aluno.nota;
const getNotasTurma = turma => turma.alunos.map(getNomaAluno);

const notas1 = escola.map(getNotasTurma);
console.log(notas1);

//console.log([].concat([ 9.3, 7.2 ], [ 6.6, 8.4 ]));

Array.prototype.flatMap = function(callback)
{
    return Array.prototype.concat.apply([], this.map(callback));
}

const notas2 = escola.flatMap(getNotasTurma);
console.log(notas2)
