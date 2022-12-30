import styles from "../styles/index.module.css";
import Navegador from "../components/Navegador";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Fundamentos de NextJS</h1>

      <div className={styles.content}>
        <Navegador href="/estiloso" textLink="Estiloso" />

        <Navegador
          href="/utilizandocomponentes"
          textLink="Utilizando Componentes"
        />

        <Navegador href="/jsx" textLink="JSX" />

        <Navegador href="./navegation/" textLink="Navegação Simples" />

        <Navegador href="./cliente/codigo" textLink="Navegação Dinamica" />
        {/* apos o /cliente (url) qualquer valor ali sera aceito e caira no codigo.jsx */}

        <Navegador href="./componenteComEstado" textLink="Componente com estado" />

        <Navegador href="./integracao1" textLink="Integração com API #01" />

        <Navegador href="./estatico" textLink="Pre-render com conteudo estatico" />

        <Navegador href="./dinamico" textLink="Pre-render com conteudo dinamico (each render)" />

      </div>
    </div>
  );
}
