// ES 6,7,8...
{
    var z = 2;
    let y = 3;
}

console.log(z);
//console.log(b); - erro

// Template string
const phone = "Poco F3"

console.log(`Ta barato o ${phone}`);

// Destructuring
const [c, a, ...rro] = "Hyndai HB20";
console.log(c);
console.log(a);
console.log(rro);

const { idade: i, nome } = {nome: "Ana", idade: 25}
console.log("Idade: ", i, "| Nome: ", nome);
