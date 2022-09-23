function soma()
{
    let soma = 0;
    for(i in arguments)
    {
        soma += arguments[i];
    }
    return soma
}

console.log(soma());
console.log(soma(0));
console.log(soma(1));
console.log(soma(3,6,9));
console.log(soma(3,4,5, "Teste"));
console.log(soma("Isso", " ", "é", " ", "um", " ", "Teste"));
