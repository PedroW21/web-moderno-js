function contarNegativos(vetor)
{
    let qtdNegativos = 0;

    for (let i = 0; i < vetor.length; i++) 
    {
        const atual = vetor[i];
        
        if(Math.sign(atual) === -1) qtdNegativos++;
    }
    
    return console.log(`Foram encontrados ${qtdNegativos} números negativos`);
}

const vetor = [-1,-231,-123,12131,412,24,21,-12,-321,0];
contarNegativos(vetor);

