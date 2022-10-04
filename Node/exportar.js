console.log(module.exports === this)
console.log(module.exports === exports) // aponta para exports

this.a = 1
exports.b = 2
module.exports.c = 3 // todos apontam para o mesmo lugar, porem somente o module.exports consegue ser usado fora desse arquivo

