const quaseArray = {0: "Rafa", 1: "Tadeu", 2: "Odessa", 3: undefined};

Object.defineProperty(quaseArray, "toString", {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0]);

const meuArr = ["Bia", "Rafa", "Kafka"];
console.log(quaseArray.toString(), meuArr);



