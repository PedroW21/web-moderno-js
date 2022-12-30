import Layout from '../../components/Layout';
import { useRouter } from 'next/router'; //podemos fazer de outras maneiras, mas seriam mais problematicas


export default function AcessarClienteComCodigo()
{
    const router = useRouter();

    return (
        <Layout titulo='Navegacao Dinamica'>
            <span>Codigo: {router.query.codigo}</span>
            <p>
                colocamos o nome do arquivo com [] para tornar a navegacao dinamica
            </p>
            <p>
            caso quisesse mais elementos dinamicos, poderia criar uma pasta entre colchetes e pegar os elementos necessários com isso (obviamente os arquivos precisariam estar entre colchetes)
            </p>
            
        </Layout>
    )
}