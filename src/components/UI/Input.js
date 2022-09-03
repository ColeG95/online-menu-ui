import classes from "./Input.module.css";

function Input(props) {
  function onStep(event) {
    props.setQuantity(event.target.value);
  }

  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input
        className={classes.input}
        value={props.value}
        min="1"
        type="number"
        onChange={onStep}
        defaultValue="1"
      />
    </div>
  );
}

export default Input;
