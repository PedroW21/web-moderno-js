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

// Transformando uma classe numa função construtora

const pessoa = (nome) => 
{
    return {
        nome,
        falar: () => console.log(`Olá, sou ${nome}`)
    }
}

const zecaUrubu = pessoa("Zeca Urubu");
zecaUrubu.falar();