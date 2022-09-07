import classes from "./CartItem.module.css";

function CartItem(props) {
  function removeItem(event) {
    event.preventDefault();
    props.removeItem(props.item);
  }

  return (
    <li className={classes.CartItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <button onClick={removeItem} type="button">
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
