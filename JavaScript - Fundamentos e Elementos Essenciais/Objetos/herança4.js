function obj(){}

const obj1 = new obj;
const obj2 = new obj;

console.log(obj1.__proto__ === obj2.__proto__);
console.log(obj.prototype === obj1.__proto__); // o obj1 (__proto__) aponta pra propriedade prototype do obj e não para o Object.prototype (o mais alto nivel de prototipo obj);

obj.prototype.nome = "Iriney";
obj.prototype.falar = function() {
    console.log(`Nasci no prototipo! Bom dia ${this.nome}!`);
};

obj1.falar();

obj2.nome = "Donatelo";
obj2.falar();

const obj3 = {};
obj3.__proto__ =  obj.prototype; // estou mudando a referencia do obj3 para o prototipo do obj2
obj3.nome = "Michelangelo";
obj3.falar();

// A Bagunça final

console.log((new obj).__proto__ === obj.prototype);
console.log(obj.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null); // ultimo prototipo na cadeia

/*
Resumindo, o obj (function) tem uma propriedade prototype (.prototype) 
que aponta para obj.prototype (e seu __proto__ aponta para function.prototype,
que aponta para Object.prototype), onde pode se encontra seus atr (nome, idade...) 
e tambem seu __proto__, que aponta para o Object.prototype (a instancia maxima). 
*/

