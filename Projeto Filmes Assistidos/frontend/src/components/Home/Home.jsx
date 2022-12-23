import Main from "../templates/Main/Main";

const headerProps = {
    icon: "home",
    title: "Início",
    subtitle: "Projeto para uso pessoal de cadastro de filmes, séries e animes"
}

const Home = props => (
    <Main {...headerProps}>
        <div className="display-6">
            Bem vindo!
        </div>
        <hr />
        <p className="mb-0">
        Sistema para exemplificar a construção de uma aplicação que faz CRUD
        (create, read, update, delete)
        </p>
        
    </Main>
);

export default Home;