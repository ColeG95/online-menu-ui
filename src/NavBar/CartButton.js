import classes from "./CartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../context/cart-context";
import CartIcon from "./CartIcon";

function CartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const ctx = useContext(CartContext);

  const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

  useEffect(() => {
    if (ctx.cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.cartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.cartItems.length}</span>
    </button>
  );
}

export default CartButton;
