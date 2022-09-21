function tratarErroELancar(erro)
{
    throw new Error("...");
    //throw "Erro em";
    //throw 10;
    // throw true;
}

function imprimirNomeGritado(obj)
{
    try
    {
        console.log(obj.name.toUpperCase() + "!!!");
    }
    catch(erro)
    {
        tratarErroELancar(erro);
    }
    finally
    {
        console.log("Fim da execução...");
    }
}

const obj = { nome: "Tadeu"};

imprimirNomeGritado(obj);