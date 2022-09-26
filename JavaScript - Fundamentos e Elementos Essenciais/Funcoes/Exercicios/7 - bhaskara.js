function calcBascara(a,b,c)
{
    let delta = calcDelta(a,b,c);

    if(delta < 0) return console.log("Negativo o delta");

    let calc1 = ((-b) + Math.sqrt(delta)) / 2 * a;
    let calc2 = ((-b) - Math.sqrt(delta)) / 2 * a;
    return [calc1,calc2];
}

function calcDelta(a,b,c)
{
    return calc = (Math.pow(b,2)) - 4 * a * c
}

console.log(calcBascara(1,12,-13));
// Expected output: 1, -13