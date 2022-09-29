console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function()
{
    return this.split("").reverse().join("");
}

console.log("Teste da função criada no prototipo".reverse());

Array.prototype.first = function()
{
    return this[0]
}

console.log([1,2,3,4,5].first());
console.log(["a", "b", "c"].first());

// Não é indicado fazer isso pois pode ocorrer bizarrices 
String.prototype.toString = function()
{
    return "F pessoal";
}

console.log("Rapaz que peteco".reverse());