import { useContext, useState } from "react";
import CartContext from "../context/cart-context";
import classes from "./MenuItemForm.module.css";
import Input from "./UI/Input";

function MenuItemForm(props) {
  const [quantity, setQuantity] = useState(1);

  const ctx = useContext(CartContext);

  function addItemHandler(event) {
    event.preventDefault();
    for (let i = 0; i < quantity; i++) {
      ctx.addItemHandler(props.item);
    }
  }

  return (
    <form className={classes.form}>
      <div>
        <Input label="Amount" setQuantity={setQuantity} />
      </div>
      <button onClick={addItemHandler}>+ Add</button>
    </form>
  );
}

export default MenuItemForm;
