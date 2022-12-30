import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function utilizandocomponentes() {
  return (
    <Layout titulo='Exemplo de componente Header'>
      <div>
        <Cabecalho title="Fundamentos de Next.js & React" />
      </div>
    </Layout>
  );
}
