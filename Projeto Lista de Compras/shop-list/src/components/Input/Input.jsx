import './Input.css';

const Input = props => 
        <div className='input'>
            <label htmlFor="product" className='label'>{props.label}</label>
            <input type= {props.type} name= 'product' onChange= {e => props.input1 ? props.input1(e) : props.input2(e)} value={props.value}/>
        </div>

export default Input;