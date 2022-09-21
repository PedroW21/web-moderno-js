function random([min = 0, max = 1000])
{
    if(min > max) [min,max] = [max, min];

    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(random([50,40]));
console.log(random([932,443]));
console.log(random([ , 320]));
console.log(random([]));