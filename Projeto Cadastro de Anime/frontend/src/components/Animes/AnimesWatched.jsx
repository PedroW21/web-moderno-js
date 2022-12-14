import Main from "../template/Main/Main";

const headerProps = {
    icon: 'check',
    title: 'Animes assistidos',
    subtitle: 'Consulta dos animes que já vi ate o momento',

}

const AnimesWatched = props => 
{

    return (
        <Main {...headerProps}>
            Consulta de animes
        </Main>
    )
}

export default AnimesWatched;