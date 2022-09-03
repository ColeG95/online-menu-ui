import classes from "./CartButton.module.css";
import { useContext } from "react";
import CartContext from "../context/cart-context";
import CartIcon from "./CartIcon";

function CartButton(props) {
  const ctx = useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.cartItems.length}</span>
    </button>
  );
}

export default CartButton;
