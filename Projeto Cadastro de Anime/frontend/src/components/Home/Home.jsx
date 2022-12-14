import Main from "../template/Main/Main";

const Home = () => (
  <Main icon="home" title="Início" subtitle="Projeto cadastro de usuario">
    <div className="display-4">
      Bem Vindo!
      <hr />
    </div>
    <p className="mb-0">
      Sistema para exemplificar a construção de uma aplicação que faz CRUD
      (create, read, update, delete)
    </p>
  </Main>
);

export default Home;