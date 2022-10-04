const filhas = ["Rayane", "Brenda"];
const filhos = ["Ryan", "Breno"];

const todos = filhas.concat(filhos, "Fulano", "Ciclano"); // nao altera o array original, retorna um novo

console.log(todos, filhos, filhas);
console.log([].concat([1,2], [3,4], 5, [[6,7]]));