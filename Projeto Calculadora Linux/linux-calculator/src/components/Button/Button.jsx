import './Button.css';
const Button = props => {

    let classes = 'button ';
    classes += props.ac ? classes += 'ac ' : ''

    return (
        <button 
        onClick={e => props.click(props.label)}
        className={classes}>
            {props.label}
        </button>
    )
}

export default Button;