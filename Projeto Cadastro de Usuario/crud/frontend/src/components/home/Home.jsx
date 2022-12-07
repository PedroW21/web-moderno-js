import Main from "../template/Main/Main";

const Home = props =>
    <Main icon='home' title='Início'
    subtitle='Segundo projeto do capítulo de React!'
    >
         <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React</p>
    </Main>

export default Home;