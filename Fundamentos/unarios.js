let num1 = 1;
let num2 = 2;

num1++;
--num1; // esse tem mais precedencia na hora de fazer uma operação doq o de cima;

console.log(++num1 === num2--); // não é boa pratica
console.log(num1 === num2);

