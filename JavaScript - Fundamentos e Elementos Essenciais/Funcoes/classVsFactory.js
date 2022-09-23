class Pessoa
{
    constructor(nome)
    {
        this.nome = nome;
    }
    
    falar()
    {
        console.log(`Meu nome é ${this.nome}! Prazer!`); // aqui o this pode variar a depender de quem chamou / Ex: evento de click no body de um html que invoca ela, daria undefined pois o this perde seu contexto
    }
}

const zeca = new Pessoa("Zeca");

//zeca.falar();

const pessoa = nome => {
    return {
        falar: () => console.log(nome) // aqui nunca perde o contexto, pois ele tem ciencia de seu contextp lexico 
    }
}

const donaTeia = pessoa("Dona Teia");
donaTeia.falar();