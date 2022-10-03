function maiorEMenorValor(vetor)
{
    let maiorValor = vetor[0];
    let menorValor = vetor[0];

    for (let i = 0; i < vetor.length; i++) 
    {
        const atual = vetor[i];
        
        if(atual > maiorValor) maiorValor = atual;

        if(atual < menorValor) menorValor = atual;
    }

    return console.log(`Maior valor: ${maiorValor}, Menor valor: ${menorValor}`);
}


const vetor = [4343,53412,212,543252,6553244,21314,2131,1121, 8537341];

maiorEMenorValor(vetor);

