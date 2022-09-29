const pai = { nome: "Pietro", cabelo: "Cacheado", corOlhos: "castanho-escuro" };
const filha1 = Object.create(pai);

filha1.nome = "Larissa";
console.log(filha1.corOlhos);

const filha2 = Object.create(pai, {
    nome: {value: "Mariana", writable: false, enumerable: true}
});

console.log(filha2.nome);
console.log(`${filha2.nome} tem o cabelo ${filha2.cabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

console.log();

for(let key in filha2)
{
    filha2.hasOwnProperty(key) ? 
    console.log("Chave propria: ", key) : console.log("Foi herdado: ", key);
}

