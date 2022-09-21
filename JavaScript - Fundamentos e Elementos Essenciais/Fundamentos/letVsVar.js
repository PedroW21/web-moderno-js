function usandoLet()
{
    // Let tem alem do escopo global e de função, o de bloco
    const funcs = [];
    for(let i=0; i< 10; i++)
    {
        funcs.push(function() {console.log(i)});
    }

    funcs[2]();
    funcs[8]();
}

function usandoVar()
{
    // como o var não tem escopo de bloco, ele so colocara a ultima
    const funcs = [];
    for(var i=0; i< 10; i++)
    {
        funcs.push(function() {console.log(i)});
    }

    funcs[2]();
    funcs[8]();
}

usandoLet();
usandoVar();