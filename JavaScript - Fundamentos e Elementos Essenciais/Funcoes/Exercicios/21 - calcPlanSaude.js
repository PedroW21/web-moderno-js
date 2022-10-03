function calcPlanoSaude(idade)
{
    const precoBase = 100;
    
    if(idade < 10) return console.log("Valor total para crianças: ", precoBase + 80);

    if(idade < 30) return console.log("Valor total para adolescentes e jovens adultos: ", precoBase + 50);

    if(idade < 60) return console.log("Valor total para adultos e quase idosos: ", precoBase + 95);

    return console.log("Valor total para idosos: ", precoBase + 130);
}

calcPlanoSaude(6);
calcPlanoSaude(10);
calcPlanoSaude(16);
calcPlanoSaude(18);
calcPlanoSaude(24);
calcPlanoSaude(36);
calcPlanoSaude(48);
calcPlanoSaude(52);
calcPlanoSaude(60);
calcPlanoSaude(71);

