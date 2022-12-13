import './Table.css';

function renderRows(products, btn)
{
    const productsInRow = products.products.map((product, idx) => 
                <tr key={idx}>
                <td className='trow-td__product'>{product.productName}</td>
                <td className='trow-td__price'>R$  {product.productValue}</td>
                <td className='trow-td__btn-remove'>{btn}</td>
                </tr>
            )
    return productsInRow;
}

const Table = props => 
    <table className='table'>
        <thead>
            <tr>
                <td className='thead-td'>Produto</td>
                <td className='thead-td'>Preço (R$)</td>
                <td className='thead-td__remove'>Remover</td>
            </tr>
        </thead>
        <tbody>
            {props.products.products ? renderRows(props.products, props.btnRemove) : ' '}
        </tbody>
    </table>

export default Table;