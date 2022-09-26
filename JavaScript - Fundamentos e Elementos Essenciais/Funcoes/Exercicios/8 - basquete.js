function mostrarRecordeEPiorJogo(historicoJogos)
{
    let jogos = historicoJogos.split(" ");
    jogos = jogos.map(element => parseInt(element));
      
    let piorJogo 
    jogos.forEach((element, index) => { element < jogos[index+1] ? piorJogo = index  : "deu b.o no codigo!"});

    let recordeBatido = 0;
    let maiorPontuacao = jogos[0];
    jogos.forEach( (element) => { 
        if(element > maiorPontuacao) 
        {
            maiorPontuacao = element;
            recordeBatido++
        }
    });

    return console.log([piorJogo+1, recordeBatido]);

}

let historico = "10 20 20 8 25 3 0 30 1";
mostrarRecordeEPiorJogo(historico);


