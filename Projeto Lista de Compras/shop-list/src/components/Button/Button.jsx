import "./Button.css";


const Button = (props) => {

    let classes = "button ";
    classes = props.remove ? classes += "btn-remove" : classes;

    const witchFunction = props.save ? () => props.save() : (event) => {props.remove(event)};

  return (
    <button className={classes} onClick={witchFunction}>
      {props.label}
    </button>
  );
};

export default Button;
