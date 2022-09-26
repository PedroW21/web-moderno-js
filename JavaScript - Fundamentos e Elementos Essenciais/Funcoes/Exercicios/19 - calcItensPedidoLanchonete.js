function cardapio(item, qtd)
{
    switch(item)
    {
        case 100:
            console.log(`Foram pedidos ${qtd} chachorros-quentes, total R$${qtd * 3}`);
            break;
        case 200:
            console.log(`Foram pedidos ${qtd} hambuergues simples, total R$${qtd * 4}`);
            break;
        case 300:
            console.log(`Foram pedidos ${qtd} chessebuerguers, total R$${qtd * 5.50}`);
            break;
        case 400:
            console.log(`Foram pedidos ${qtd} baurus, total R$${qtd * 7.50}`);
            break;
        case 500:
            console.log(`Foram pedidos ${qtd} refrigerantes, total R$${qtd * 3.50}`);
            break;
        case 600:
            console.log(`Foram pedidos ${qtd} sucos, total R$${qtd * 2.80}`);
            break;
        default:
            return console.log("Item não existe no cardapio");
    }
}

cardapio(100,3);
cardapio(200,4);
cardapio(300,2);
cardapio(400,1);
cardapio(500,2);
cardapio(600,4);
cardapio(700,4);