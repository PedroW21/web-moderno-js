import Main from "../templates/Main/Main";

const headerProps = 
{
    icon: 'film',
    title: 'Filmes',
    subtitle: 'CRUD de filmes com separação das tabelas de filmes vistos e filmes para ver'
}


const Filmes = props =>
{


    return (
        <Main {...headerProps}>
            deu certo meu bom 3
        </Main>
    )
}

export default Filmes;