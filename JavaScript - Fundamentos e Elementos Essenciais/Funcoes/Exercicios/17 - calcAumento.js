function calcAumento(salario, planoDeTrabalho)
{
    switch(planoDeTrabalho.toLowerCase())
    {
        case "a":
            salario = salario * 1.1;
            break;
        case "b":
            salario = salario * 1.15;
            break;
        case "c":
            salario = salario * 1.2;
            break;
        default:
            return console.log("Plano de trabalho inválido!");
    }
    
    return console.log(salario);
}

calcAumento(1000,"A");
calcAumento(1000,"B");
calcAumento(1000,"c");
calcAumento(1000,"D");
