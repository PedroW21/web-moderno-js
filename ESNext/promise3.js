function gerarNumEntre(min, max)
{
    if(min > max) [max, min] = [min, max];       

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio)
    });
}

gerarNumEntre(203, 999)
.then( num => `O numero gerado foi ${num}`)
.then(console.log);