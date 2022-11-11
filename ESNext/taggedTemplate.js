// tagged template - processar uma template dentro de uma funcao

function tag(partes, ...valores)
{
    console.log(partes);
    console.log(valores);

    return `outra string`;
}

const aluno = "Gil";
const situacao = "Aprovado";

console.log(tag `${aluno} está ${situacao}.`);

