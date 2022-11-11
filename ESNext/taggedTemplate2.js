function real(partes, ...valores)
{
    const resultado = [];

    valores.forEach( (valor, indice) => 
    {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
        
        resultado.push(partes[indice], valor)
    });

    return resultado.join('');
}

const preco = 45.99;
const preco2 = 15;

console.log(real `1x de R$${preco} ou 3x de R$${preco2}`);

