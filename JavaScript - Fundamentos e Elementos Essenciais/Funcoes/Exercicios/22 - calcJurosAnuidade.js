function calcValorMensalidade(mes)
{
    let valorMensalidade = 1000;

    if(mes === 1) return console.log("Valor mensalidade: ", valorMensalidade);
    if(mes === 2) mes = 1;

    return console.log(`Valor da mensalidade acrescida de ${mes * 5}%, total mensalidade + multa: R$${(valorMensalidade * (1 + 0.05) ** mes).toFixed(2)}`);
}

calcValorMensalidade(1);
calcValorMensalidade(2);
calcValorMensalidade(4);
calcValorMensalidade(6);
calcValorMensalidade(10);
calcValorMensalidade(12);


