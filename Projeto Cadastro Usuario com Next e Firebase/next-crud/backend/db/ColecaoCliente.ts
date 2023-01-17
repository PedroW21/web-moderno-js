import firebase from "../config";
import Cliente from "../../src/core/Cliente";
import ClienteRepositorio from "../../src/core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio
{
    // do firebase
    #conversor = { //transformando uma classe pra um obj
        toFireStore(cliente: Cliente)
        {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFireStore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente
        {
            //recebemos algo do firestore e ja convertemos para nossa classe
            const dados = snapshot.data(options);
            return new Cliente(snapshot.id, dados.nome, dados.idade)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente>
    {
        if(cliente?.id)
        {
            await this.#colecao().doc(cliente.id).set(cliente)
            return cliente;
        }
        else
        {
            const docRef = await this.#colecao().add(cliente);
            const doc = await docRef.get();
            return doc.data();
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.#colecao().doc(cliente.id).delete;
    }

    async obterTodos(cliente: Cliente): Promise<Cliente[]> {
        
        const query = await this.#colecao.get()
        return query.docs.map(doc => doc.data() ?? [])

    }

    #colecao()
    {
        return firebase
        .firestore().collection('clientes')
        .withConverter(this.#conversor)
    }
}