for(let letra of "Pierra Danté")
{
    console.log(letra);
}

const assuntosEcma = ["Map", "set", "promisse"];

for(let i in assuntosEcma) 
{
    console.log(i); // so mostra o indice
}

for (let assunto of assuntosEcma)     
{
    console.log(assunto);
}

const assuntosMap = new Map([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ["Promisse", { abordado: false }]
])

for(let assunto of assuntosMap)
{
    console.log(assunto);
}

for(let [chave, valor] of assuntosMap.entries())
{
    console.log(chave, valor);
}


const setEx = new Set(["a","b","c"]);
for(let letra of setEx)
{
    console.log(letra);
}

