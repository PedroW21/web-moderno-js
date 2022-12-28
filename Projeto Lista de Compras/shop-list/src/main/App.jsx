import { useState, useEffect } from 'react';
import './App.css';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Table from '../components/Table/Table';


function App()
{
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');
  const [products, setProducts] = useState({products: []});
  const [totalValue, setTotalValue] = useState(0)
  const [localStorageChange, setLocalStorageChange] = useState(false);

  useEffect(() => {
    getValueFromLocalStorage();
  }, [localStorageChange])

  useEffect(() => {

    if(!sessionStorage.length) 
    {
      setTotalValue(0);
      return
    }

    const totalValue = products.products.reduce((acc, actual) => acc + actual.productValue, 0);

    setTotalValue(totalValue);
  }, [products])

  const product = { productName, productValue }


  const clearState = () =>
  {
    setProductName('');
    setProductValue('');
  }

  const input1 = (e) =>
  {
    let productName = e.target.value

    setProductName(productName);
  }

  const input2 = (e) =>
  {
    let productValue = e.target.value;

    if(productValue < 0)
    {      
      alert('Proibido numeros negativos ou ponto para separação decimal');
      return;
    }

    productValue = productValue.includes('.') ? parseFloat(productValue) : parseInt(productValue);

    setProductValue(productValue);
  }

  const saveValueLocalStorage = () =>
  {
    if(!productName || !productValue){
       alert('NECESSÁRIO AMBOS OS CAMPOS PREENCHIDOS!');
       return
    }

    if(sessionStorage.length > 0)
    {
      let actualProducts = sessionStorage.getItem('products');
      actualProducts = JSON.parse(actualProducts);
      

      const newData = actualProducts.length ? [...actualProducts, product] : [actualProducts, product];
      
      sessionStorage.setItem("products", JSON.stringify(newData));

      setLocalStorageChange(true);
      clearState();

      return
    }
    else
    {

      const newProduct = JSON.stringify([product]);

      // console.log('new prod', newProduct);
      sessionStorage.setItem("products", newProduct);

      setLocalStorageChange(true);
      clearState();
    }
    
  }

  const getValueFromLocalStorage = () =>
  {
    let products = JSON.parse(sessionStorage.getItem('products'));
    if(!products) products = ''

    setProducts({ products })
    setLocalStorageChange(false);
  }

  const removeProduct = (e) => {

    const tr = e.target.parentNode.parentNode;
    const productName = tr.childNodes[0].innerHTML;

    const newProducts = products.products.filter(product => product.productName !== productName) 
    
    if(newProducts.length === 0)
    {
      sessionStorage.clear();
      setLocalStorageChange(true);

      return
    }

    sessionStorage.setItem('products', JSON.stringify(newProducts));  
    setLocalStorageChange(true);
  }

  return (
    <div className="App">
      <h1>Listinha de Compras</h1>

      <div className='inputs'>
        <Input label='Produto' type='text' value={product.productName} input1 = {input1} />
        <Input label='Preço' type='number' value={product.productValue} input2 = {input2} />
      </div>
      
      <div className='buttons'>
        <Button label='SALVAR' save={saveValueLocalStorage} />
      </div>
      
      <span className='totalValue'>TOTAL: R${totalValue}</span>

      <Table products={products} btnRemove= {<Button label='X' remove={removeProduct}/>}/>
    </div>
  )
}

export default App;
  


