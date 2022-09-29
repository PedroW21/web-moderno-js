// pessoa -> end. Mem {obj}
const pessoa = { nome: "pierre" };
pessoa.nome = "Rodrigo";
// Alterando o obj, não a referencia em sua memoria

// pessoa <- obj <- outro end. Mem

//Deixando o obj em si constante, e não somente a referencia na memoria

Object.freeze(pessoa);
pessoa.endereco = "Av. Palmares";
console.log(pessoa);
