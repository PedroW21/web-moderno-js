function escolherCarro(modelo)
{
    modelo = modelo.toLowerCase();

    switch(modelo)
    {
        case "hatch":
            console.log("Compra efetuada com sucesso");
            break;
        case "sedan":
        case "motocicleta":
        case "motocicleta":
        case "caminhonete":
            console.log("Não prefere comprar outro modelo?");
            break;
        default:
            console.log("Modelo inválodo");
    }
}

escolherCarro("HATCH");
escolherCarro("motocicleta");
escolherCarro("seDAn");
escolherCarro("patinente");
escolherCarro("caminhonete");
