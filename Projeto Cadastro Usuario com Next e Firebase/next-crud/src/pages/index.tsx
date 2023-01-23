import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulairo";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../../backend/db/ColecaoCliente";
 
export default function Home() {
  const repo: ClienteRepositorio = new ColecaoCliente();
 
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
 
  useEffect(() => {
    repo.obterTodos().then(setClientes);
  }, []);
 
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }
 
  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente);
    repo.obterTodos();
  }
 
  function salvarCliente(cliente: Cliente) {
    repo.salvar(cliente);
    setVisivel("tabela");
    repo.obterTodos();
  }
 
  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("form");
  }
 
  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
 
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}