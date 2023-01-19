import Cliente from "./Cliente";

//dentro desse arquivo não precisamos saber com qual bd estamos usando

export default interface ClienteRepositorio {

    salvar(cliente: Cliente): Promise<Cliente>

    excluir(cliente: Cliente): Promise<void>
    
    obterTodos(): Promise<Cliente[]>

}