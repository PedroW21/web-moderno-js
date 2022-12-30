import styles from "../styles/Estiloso.module.css";
import Layout from "../components/Layout";

export default function Estiloso() {
  return (
    <Layout titulo="Exemplo de Css Modularizado">
      <div className={styles.roxo}>
        <h1>Estilo usando CSS Modules</h1>
      </div>
    </Layout>
  );
}
