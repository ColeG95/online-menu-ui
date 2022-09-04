import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../context/cart-context";
import Modal from "./Modal";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  function removeItem(item) {
    cartCtx.removeItemHandler(item);
  }

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          removeItem={removeItem}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal hideCart={props.hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
