import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import Modal from "./Modal";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.cartItems.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
