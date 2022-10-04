// O array em javascript é um obj, so que em vez de chave valor, se utiliza do indice

console.log(typeof []);

// Uma forma valida mas não recomendada
let aprovados = new Array("Bia", "Carlin", "Ana");
console.log(aprovados);

// Recomendado - forma literal
aprovados = ["Aninha", "Carlão", "Biatriz"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // retorna undefined

aprovados[3] = "Paulo";
aprovados.push("Clarice"); // metodo mais apropriado

console.log(aprovados.length);
aprovados[8] = "Sr. Monstesquie"
// Metodos para arrays

console.log(aprovados);
aprovados.sort(); // altera o array original
console.log(aprovados);

delete aprovados[1]; // so trocara o elemento que esta nessa posição por undefined

// Reorganizando...

aprovados = ["Octopus", "Lizard", "Crow"];
aprovados.splice(1, 2, "Spider", "Unicorn"); // exluci os elementos 1 e 2, e adiciona os outros 2 solicitados
aprovados.splice(1, 0, "Momonga", "Albedo"); // adiciona, apos o elemento dito os elementos desejados
console.log(aprovados);

let teste = [1,2,3];
Object.freeze(teste);

teste[3] = 4;

console.log(teste);
