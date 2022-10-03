function calcMediaVetor(vetor)
{
    let somaVetor = 0;

    for(let i = 0; i < vetor.length; i++)
    {
        somaVetor += vetor[i];
    }

    let media = somaVetor / vetor.length;

    return console.log(`Foram encontrados ${vetor.length} elementos no vetor, e tivemos uma media de ${media.toFixed(2)}`);
}


const vetor = [123,453,65,76,98,12,2131];

calcMediaVetor(vetor);