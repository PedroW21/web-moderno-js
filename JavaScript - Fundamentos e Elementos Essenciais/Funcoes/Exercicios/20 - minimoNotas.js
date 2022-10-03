function retornaNotas(valor)
{
 
    let notas = extractNotas(valor);

    if(notas[0] != 0) console.log(`Foram necessárias ${notas[0]} de R$100`);
    if(notas[1] != 0) console.log(`Foram necessárias ${notas[1]} de R$50`);
    if(notas[2] != 0) console.log(`Foram necessárias ${notas[2]} de R$10`);
    if(notas[3] != 0) console.log(`Foram necessárias ${notas[3]} de R$5`);
    if(notas[4] != 0) console.log(`Foram necessárias ${notas[4]} de R$1`);

}

function extractNotas(valor)
{
    let atual = valor;
    
    let notas100 = 0;
    let notas50 = 0;
    let notas10 = 0;
    let notas5 = 0;
    let notas1 = 0;
    
    while(atual > 0)
    {
        if(atual >= 100)
        {
           atual -= 100;
            notas100++;
        }
    
        if(atual >= 50)
        {
            atual -= 50;
            notas50++;
        }
    
        if(atual >= 10)
        {
            atual -= 10;
            notas10++;
        }
    
        if(atual >= 5)
        {
            atual -= 5;
            notas5++;
        }
    
        if(atual >= 1)
        {
            atual -= 1;
            notas1++;
        }
    }

    return [notas100, notas50, notas10, notas5, notas1];
}

retornaNotas(18);