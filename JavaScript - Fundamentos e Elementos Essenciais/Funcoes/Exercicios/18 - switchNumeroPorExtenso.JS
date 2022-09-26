function numeroPorExtenso(num)
{
    switch(num)
    {
        case 0:
            console.log("Zero");
            break;
        case 1: 
            console.log("Um");
            break;
        case 2: 
            console.log("Dois");
            break;
        case 3: 
            console.log("Três");
            break;
        case 4: 
            console.log("Quatro");
            break;
        default:
            return console.log("Número fora do intervalo");
    }
}

numeroPorExtenso(0);
numeroPorExtenso(1);
numeroPorExtenso(2);
numeroPorExtenso(3);
numeroPorExtenso(4);
numeroPorExtenso(5);
