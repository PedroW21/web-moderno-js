
console.log(this === global);
console.log(this === module);

console.log(this  === module.exports);
console.log(this === exports);

function logThis()
{
    console.log("Dentro de uma funcao em...");

    console.log(this === exports);
    console.log(this  === module.exports);

    console.log(this === global); // coisas com this ficarao disponiveis no contexto global
}

const test = () => {
    console.log("Dentro da arrow...")
    console.log(this === global);
    console.log(this === module.exports);
}

logThis();
test;