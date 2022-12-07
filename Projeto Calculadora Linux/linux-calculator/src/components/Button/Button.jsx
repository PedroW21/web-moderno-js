import './Button.css';
const Button = props => {

    let classes = 'button ';

    return (
        <button 
        onClick={e => props.click(props.label)}
        className={classes}>
            {props.label}
        </button>
    )
}

export default Button;