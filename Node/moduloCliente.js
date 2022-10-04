const moduloA = require("./moduloA"); // Common JS - padrao antes do ES2015
const moduloB = require("./moduloB");

console.log(moduloA);
console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);

console.log(moduloB);
console.log(moduloB.bomDia);
moduloB.boaNoite();

