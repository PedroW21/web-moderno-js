function jurosSimples(capitalIncial, taxa, tempo)
{
    let calc = capitalIncial * taxa * tempo;
    console.log("Capital Inicial: ", capitalIncial);
    console.log("Juros recebidos durante o perido: ", calc);
    console.log("Total a receber: ", capitalIncial + calc);
}

jurosSimples(100, 0.025, 10);

function jurosCompostos(capitalInicial, taxa, tempo)
{
    let calc = capitalInicial;
    let i = 0;
    while(i < tempo)
    {
        calc *= (1 + taxa);
        i++;  
    } 
    
    console.log("Capital Inicial (compostos): ", capitalInicial.toFixed(2));
    console.log("Juros recebidos durante o perido (compostos): ", (calc - capitalInicial).toFixed(2));
    console.log("Total a receber (compostos): ", calc.toFixed(2));
}

jurosCompostos(100, 0.025, 10);
