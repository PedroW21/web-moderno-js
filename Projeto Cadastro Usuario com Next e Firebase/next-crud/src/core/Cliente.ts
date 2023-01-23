export default class Cliente
{
    #id: string;
    #nome: string;
    #idade: number;

    constructor(id: string = null, nome: string, idade: number)
    {
        this.#nome = nome;
        this.#idade = idade;
        this.#id = id;
    }

    static vazio()
    {
        return new Cliente(null, "", 0)
    }

    get id()
    {
        return this.#id;
    }

    get nome()
    {
        return this.#nome;
    }

    get idade()
    {
        return this.#idade;
    }
}