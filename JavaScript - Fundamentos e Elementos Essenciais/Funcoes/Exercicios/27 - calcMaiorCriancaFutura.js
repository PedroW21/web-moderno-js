function calcMaiorCriancaFutura(crianca1, crianca2)
{
    
    let eIgual = false;
    let anosAteIgualarem = 0;
    
    let altura1 = crianca1.altura;
    let altura2 = crianca2.altura;
    
    let crescAltura1 = crianca1.txCresc;
    let crescAltura2 = crianca2.txCresc;
    
    if(altura1 < 0 || altura2 < 0) return console.log("Alturas Inválidas!");
    if(crescAltura1 < 0 || crescAltura2 < 0) return console.log("Taxas de crescimentos Inválidas!");


    while(eIgual === false)
    {
        if(altura1 === altura2) break;

        altura1+= crescAltura1;
        altura2+= crescAltura2;

        anosAteIgualarem++;

        if(altura1 === altura2) eIgual = true;
    }

    return console.log(`Foram necessários ${anosAteIgualarem} anos para ficarem da mesma altura, ficando a criança 1 com ${altura1/100}m e a 2ª com ${altura2/100}m`);
}


const crianca1 = 
{
    altura: 150,
    txCresc: 1
}

const crianca2 = 
{
    altura: 160,
    txCresc: 0.5
}

const crianca3 =
{
    altura: -160,
    txCresc: 0.5
}

const crianca4 =
{
    altura: 160,
    txCresc: -0.5
}

calcMaiorCriancaFutura(crianca1, crianca2);
calcMaiorCriancaFutura(crianca2, crianca3);
calcMaiorCriancaFutura(crianca1, crianca4);
