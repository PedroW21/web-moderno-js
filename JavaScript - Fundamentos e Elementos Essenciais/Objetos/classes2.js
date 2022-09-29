class Avo
{
    constructor(sobrenome)
    {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo // definindo a relação de prototipos
{
    constructor(sobrenome, profissao = "dev")
    {
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai
{
    constructor()
    {
        super("Silva");
    }
}


const filho = new Filho;
console.log(filho);