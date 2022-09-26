function verificaNota(nota)
{
    if(nota < 37)
    {
        console.log("Reprovado! Nota: ", nota);
    }
    else if(nota % 5 === 3)
    {
        nota+= 2;
        return console.log("Aprovado! Nota: ", nota)
    }
    else if (nota % 5 === 4)
    {
        nota+= 1;
        return console.log("Aprovado! Nota: ", nota)
    }
    else
    {
        return console.log("Aprovado! Nota: ", nota)
    }
}
verificaNota(36);
verificaNota(38);
verificaNota(49);
verificaNota(54);
verificaNota(63);
verificaNota(42);
verificaNota(46);



