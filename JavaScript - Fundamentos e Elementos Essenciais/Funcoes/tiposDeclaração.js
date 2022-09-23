console.log(soma(4,5)); // o interpretador primeiro carrega todas as funções e somente depois executa o codigo (nessa linha todas as funções ja estao carregadas)
// console.log(sub(3,4)); - dara undefined aqui, so pode ser apos a declaração dela (assim como a named function)

// Function declaration
function soma(a,b) {return a+b}

// function expression
const sub = function(a,b) {return a-b};

// named function expression

const mult = function mult(a,b) {return a * b};