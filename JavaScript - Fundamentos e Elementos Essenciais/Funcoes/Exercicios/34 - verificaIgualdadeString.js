function verificarIgualdade(str1, str2)
{
    //if(str1.length != str2.length) return console.log("Palavras de tamanho")

    let eIgual;

    let menorStr = str1.length < str2.length ? str1 : str2;
    let maiorStr = menorStr === str2 ? str1 : str2;

    for (let i = 0; i < menorStr.length; i++) {
       
        if(menorStr[i].toLowerCase() === maiorStr[i].toLowerCase()) eIgual = true;
        else
        {
            eIgual = false;
        }
    }

    return console.log(`${menorStr} está contida em ${maiorStr} ? ${eIgual}`);
}

verificarIgualdade("BANANA", "banana");
verificarIgualdade("bananaa", "banana");
verificarIgualdade("maça", "banana");

