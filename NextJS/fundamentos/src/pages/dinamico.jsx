import Layout from "../components/Layout";

export function getServerSideProps()
{
    return {
        props:
        {
            numeroDinamico: Math.random()
        }
    }
}

export default function Dinamico(props)
{
    return (
        <Layout titulo='Conteudo Estático'>
            <div>
                Dinamico (Servidor Side): {props.numeroDinamico}
            </div>
        </Layout>   
    )
}