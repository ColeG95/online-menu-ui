import classes from "./CartItem.module.css";

function CartItem(props) {
  return (
    <li>
      <div>
        <div>{props.name}</div>
        <div>{props.price}</div>
      </div>
      <div>
        <button>Remove</button>
      </div>
      <hr />
    </li>
  );
}

export default CartItem;
