function fatorial(num)
{
    if(num <= 0) return console.log("Invalid number to calculate factorial");

    const extractedNumbers = extractNumbersToFactorial(num);

    const factorial = calcFactorial(extractedNumbers);

    return console.log(`Fatorial de ${num} = ${factorial}`);

}

function extractNumbersToFactorial(num)
{
    let numToMultiply = [];
    numToMultiply.push(num);
    for(let i = 1; i < num; i++)
    {
        let extractNumberFactorial = num - i;

        if(extractNumberFactorial === 0) break;

        numToMultiply.push(extractNumberFactorial);
    }

    return numToMultiply;
}

function calcFactorial(numbers)
{
    let result = 1;
    for(i=0; i < numbers.length; i++)
    {
        if(numbers[i] === numbers.length - 1) i = 1;
        result *= numbers[i];
    }

    return result;
}


fatorial(4);
fatorial(5);
fatorial(0);
fatorial(-1);
