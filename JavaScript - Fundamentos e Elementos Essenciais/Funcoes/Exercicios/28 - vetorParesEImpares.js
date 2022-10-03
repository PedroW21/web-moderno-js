function verificaQtdImparesEPares(arr)
{
    let qtdPares = 0;
    let qtdImpares = 0;

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 === 0)
        {
            qtdPares++;
        }
        else
        {
            qtdImpares++;
        }
    }

    return console.log(`Foram encontados ${qtdPares} números pares e ${qtdImpares} ímpares`);
}

const nums = [1,3,45,2,423,12312,3554,121,35465];

verificaQtdImparesEPares(nums);
