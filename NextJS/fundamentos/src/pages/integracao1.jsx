import Layout from "../components/Layout";
import { useState } from "react";

export default function Intregracao() {
  const [cliente, setCliente] = useState({});
  const [codigo, setCodigo] = useState('');

  async function obterCliente() {
    // fetch(`http://localhost:3000/api/clientes/${codigo}`)
    //   .then((res) => res.json())
    //   .then((dados) => setCliente(dados));

    //outra forma

    const res = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
    const dados = await res.json();
    setCliente(dados);
  }

  return (
    <Layout titulo="Integração com API #01">
      <div>
        <input type="number"
        value={codigo} 
        onChange={e => setCodigo(e.target.value)}/>
        <button
        onClick={e => obterCliente()}
        >
            Obter Cliente
            </button>
      </div>
      <ul>
        <li>Codigo: {cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>Idade: {cliente.idade}</li>
      </ul>
    </Layout>
  );
}
