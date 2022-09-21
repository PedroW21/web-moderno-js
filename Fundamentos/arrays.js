const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores);

valores.push({oi: "iriney"}, false, undefined, "teste"); // n é boa pratica
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);