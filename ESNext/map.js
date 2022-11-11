// Estrutura chave valor - não aceita chaves duplicadas
const techs = new Map();
techs.set("react", {framework: false});
techs.set("angular", {framework: true});

console.log("Primeiro log:", techs.react);
console.log(techs.get("react"));

console.log(techs)

const chavesDoidas = new Map([
    [function() {}, "Funcao"],
    [{}, "Obj"],
    [123, "Nums"]
]);

chavesDoidas.forEach((vlr, chv) => {
    console.log(chv, vlr)
});

console.log(chavesDoidas.has(123));
chavesDoidas.delete(123);
console.log(chavesDoidas.has(123));
console.log(chavesDoidas.size);