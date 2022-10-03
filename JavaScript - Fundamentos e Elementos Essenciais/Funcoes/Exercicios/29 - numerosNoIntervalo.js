function contaNumerosNoIntervalo(vetor)
{
    let qtdNoIntervalo = 0;
    let qtdForaIntervalo = 0;

    
    for(let i=0; i < vetor.length; i++)
    {
        let intervalo = vetor[i] >= 10 && vetor[i] <= 20;

        if(intervalo)
        {
            qtdNoIntervalo++;
        }
        else
        {
            qtdForaIntervalo++;
        }
    }
    
    return console.log(`Foram encontrados ${qtdNoIntervalo} no intervalo, e ${qtdForaIntervalo} fora do intervalo`);
}

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

contaNumerosNoIntervalo(nums);
