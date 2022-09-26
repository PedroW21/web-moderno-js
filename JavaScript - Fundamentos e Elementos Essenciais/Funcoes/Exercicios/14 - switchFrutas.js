function frutaria(fruta)
{
    fruta = fruta.toLowerCase();
    switch (fruta)
    {
        case "maça":
            console.log("Não se vende essa fruta aqui");
            break;
        case "kiwi":
            console.log("Estamos com escassez de Kiwi");
            break;
        case "melancia":
            console.log("Aqui está, R$3,00/Kg");
            break;
        default:
            console.log("Fruta não encontrada!");
    }
}

frutaria("maÇa");
frutaria("KIWI");
frutaria("melancia");
frutaria("Jabuticaba");

