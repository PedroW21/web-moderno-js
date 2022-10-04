const contadorA = require("./instanciaUnica");
const contadorB= require("./instanciaUnica");

const contadorC = require("./instanciaNova")(); //chamando a funcao factory
const contadorD = require("./instanciaNova")(); //chamando a funcao factory

contadorA.increment();
contadorA.increment();
console.log(contadorB.valor);

contadorC.increment();
contadorC.increment();
console.log(contadorD.valor);
console.log(contadorC.valor);

