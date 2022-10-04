// Middleware Pattern (ou chain of responsibility)
// Exemplo 
// Não tem uma dependencia entre os passos a serem realizados
const passo1 = (contexto, next) => 
{
    contexto.valor1 = "mid1";
    next();
}

const passo2 = (contexto, next) =>
{
    contexto.valor2 = "mid2";
    next();
}

const passo3 = ctx => ctx.valor3 = "mid3";

// recebe um obj  | recebe um conjunto de middlewares e os junta em um array
const exec = (ctx, ...middlewares) => 
{
    const execPasso = indice => 
    {
        // se tem elementos no array E o indice passado é menor que o comprimento do array
        middlewares && indice < middlewares.length && 
            middlewares[indice](ctx, ()=> execPasso(indice + 1)); //aqui ele executa a função por recursicidade (chama a funcao na posicao x do arr, com o obj recebido/retornado)
    }
    execPasso(0);
}

const ctx = {};

//exec(ctx, passo1, passo2, passo3);
//console.log(ctx);

//exec(ctx, passo2, passo1, passo3);
//console.log(ctx);

exec(ctx, passo3, passo1, passo2);
console.log(ctx);