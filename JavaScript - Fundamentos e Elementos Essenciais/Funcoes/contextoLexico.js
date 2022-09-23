const valor = "IRINEY -  Valor global";

function minhaFuncao()
{
    console.log(valor);
}

function exec()
{
    const valor = "valor da funcao exec";
    minhaFuncao();
}

exec();

// Uma função em JS tem "consiência" onde foi declarada (contexto léxico (onde fisicamente foi escrita)) a qual foi declarada