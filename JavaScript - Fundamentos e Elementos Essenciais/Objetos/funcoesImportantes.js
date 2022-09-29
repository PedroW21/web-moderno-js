const pessoa = 
{
    nome: "Tio Teteia",
    idade: 56,
    poder: 1500
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`Chave: ${chave}, Valor: ${valor}`);
});

// enumerable = podera ser listada, writable = podera ser modificada?
Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "12/12/2000"
});

console.log(pessoa.dataNascimento);


// Object.assign - ECMA2015/ES6
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
const obj = Object.assign(dest, o1, o2);

console.log(dest);
console.log(obj);



