function classificaDia(dia)
{
    switch(dia)
    {
        case 1:
            console.log(`Fim de semana: ${dia}`);
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log(`Dia da semana: ${dia}`);
            break;
        case 7: 
            console.log(`Fim de semana: ${dia}`);
            break;
        default:
            console.log("Dia inválido!!");
    }
}

classificaDia(1);
classificaDia(2);
classificaDia(3);
classificaDia(4);
classificaDia(5);
classificaDia(6);
classificaDia(7);

