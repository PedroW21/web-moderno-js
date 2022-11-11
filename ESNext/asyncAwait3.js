function gerarNumEntre(min, max, notPermitedNum)
{
    if(min > max) [max, min] = [min, max];       

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min;
        
        if(notPermitedNum.includes(aleatorio)) reject(`Numero repetido não permitido: ${aleatorio}`)
        else
        {
            resolve(aleatorio)
        }
    });
}

async function gerarMegaSena(qtdNum)
{
    const nums = [];

    for(let _ of Array(qtdNum).fill()) // gera um array para ser iterado
    {
        nums.push(await gerarNumEntre(1,60, nums));
    }

    return nums;
}


gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)