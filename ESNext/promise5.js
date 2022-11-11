function funfaOuNao(valor, chanceErr) 
{
    return new Promise((resolve, reject) => {
         if(Math.random() < chanceErr)
         {
            reject("ERROR: Hello Mr!")
         }
         else
         {
            resolve(valor);
         }
    });  
}

// 0.1 é 10% de chance de gerar o erro
funfaOuNao("Testando....", 0.9)
.then(console.log)
.catch(err => console.log(err)); // depois do catch não tem mais nenhum dado