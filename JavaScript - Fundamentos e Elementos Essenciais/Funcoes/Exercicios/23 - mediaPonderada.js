function calcMediaPonderada(aluno)
{
    if(aluno.nota1 < 0 || aluno.nota2 < 0 || aluno.nota3 < 0) return console.log("Nota invaldia");

    const notasOrganizadas = organizaNotas(aluno);

    const media = (notasOrganizadas[0] * 4 + notasOrganizadas[1][0] * 3 + notasOrganizadas[1][1] * 3) / (4+3+3);

    const mediaArredondada = media.toFixed(2);
    return console.log(mediaArredondada >=5 ? `Aprovado, media: ${mediaArredondada}` : `Reprovado, media: ${mediaArredondada}`);

}

function organizaNotas(aluno)
{
    let maiorNota;

    let notasRestantes = [];

    if(aluno.nota1 > aluno.nota2) maiorNota = aluno.nota1;
    if(aluno.nota1 > aluno.nota3) maiorNota = aluno.nota1;
    
    notasRestantes = [aluno.nota2, aluno.nota3];

    if(aluno.nota2 > aluno.nota3) maiorNota = aluno.nota2;
    if(aluno.nota2 > aluno.nota1) maiorNota = aluno.nota2;
    notasRestantes = [aluno.nota1, aluno.nota3];

    maiorNota = aluno.nota3;
    notasRestantes = [aluno.nota1, aluno.nota2];

    return [maiorNota, notasRestantes];
}

const aluno1 = 
{
    nome: "Pierre",
    nota1: 6,
    nota2: 7,
    nota3: 8
}

const aluno2 = 
{
    nome: "Pierre",
    nota1: 6,
    nota2: 3,
    nota3: 7
}

const aluno3 = 
{
    nome: "Pierre",
    nota1: 5,
    nota2: 4,
    nota3: 3
}

const aluno4 = 
{
    nome: "Pierre",
    nota1: -1,
    nota2: 5,
    nota3: 3
}


calcMediaPonderada(aluno1);
calcMediaPonderada(aluno2);
calcMediaPonderada(aluno3);
calcMediaPonderada(aluno4);



