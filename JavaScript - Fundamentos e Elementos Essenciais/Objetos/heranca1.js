const ferrari = 
{
    modelo: "f40",
    velMax: 350
}

const volvo =
{
    modelo: "v40",
    velMax: 200
}



console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(ferrari.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);


function meuObj() {}

console.log(typeof meuObj, typeof Object);
console.log(Object.prototype, meuObj.prototype);



