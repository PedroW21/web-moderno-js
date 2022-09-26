function calculadora(valor1, valor2, operacao)
{
    operacao = operacao.toLowerCase();
    switch (operacao)
    {
        case "multiplicar":
            console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`);
            break;
        case "dividir":
            console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`);
            break;
        case "somar":
            console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
            break;
        case "subtrair":
            console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`);
            break;
        default:
            console.log("Essa operação não existe!");
    }
}

calculadora(3,3, "multiplicar");
calculadora(10,5, "DIVIDIR");
calculadora(7,4, "SOmaR");
calculadora(5,5, "subtrair");
calculadora(1,1, "raiz");