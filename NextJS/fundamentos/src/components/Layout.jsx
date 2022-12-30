import Link from "next/link";
import styles from "../styles/Layout.module.css";
import Navegador from "../components/Navegador";

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <h1>{props.titulo || "Mais um exemplo"}</h1>
        <Navegador href="/" textLink="Voltar" />
      </div>

      <div className={styles.conteudo}>{props.children}</div>
    </div>
  );
}
