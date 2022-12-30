import { useState } from 'react';
import Layout from '../components/Layout';

export default function ComponenteComEstado()
{
    const [numero, setNumero] = useState(0);

    function incrementar()
    {
        setNumero(numero + 1);
    }

    return (
        <Layout titulo='Componente com estado'>
            <p>{numero}</p>
            <button
            onClick={incrementar}
            >Incrementar
            </button>
        </Layout>
    )
}