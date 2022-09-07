import classes from "./Cart.module.css";
import { useContext, useState } from "react";
import CartContext from "../context/cart-context";
import Modal from "./Modal";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [state, setState] = useState();

  function removeItem(item) {
    cartCtx.removeItemHandler(item);
    setState(Math.random());
  }

  let sum = 0;

  cartCtx.cartItems.forEach((item) => {
    sum += item.price;
  });

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          item={item}
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
        <span>{sum}</span>
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
