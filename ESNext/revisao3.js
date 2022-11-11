// ES8 - Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3, d: 4 };

console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na notação literal

const nome = "Carla";

const pessoa = 
{
    nome,
    olha()
    {
        console.log("Onde?")
    },
    get nome()
    {
        return console.log(nome)
    }
}

pessoa.nome;
pessoa.olha();

// Classes

class Animal {}

class Cachorro extends Animal
{
    falar()
    {
        return "Auuu auuu";
    }
}


console.log(new Cachorro().falar());