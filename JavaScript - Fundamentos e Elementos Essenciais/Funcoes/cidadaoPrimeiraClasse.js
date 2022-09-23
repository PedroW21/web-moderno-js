// Função em JS é First-Class Object ( ou Citizens) -- É tratado como dado
// Higher-order function

// Declaração literal
function func1(){}

// Armazenada em uma variavel
const func2 = function() {}

// Armazenar em um array
const array = [function(a,b) {return a + b}, func1, func2];

//Armazenar em um atributo de um obj
const obj = {
    falar: function() {console.log("Olá!")} 
}

// Passar função como parametro
function run(fun)
{
    fun();
}

//run(function() {console.log("Exec...")});

// Uma função pode retornar/conter uma função

function soma(a,b)
{
    return function(c)
    {
        console.log(a+b+c);
    }
}

//soma(4,3)(3); - abaixo é equivalente
// const primeiraFunc = soma(4,3);
// primeiraFunc(3);
