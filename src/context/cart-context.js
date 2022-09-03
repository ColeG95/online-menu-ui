import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  addItemHandler: () => {},
  removeItemHandler: () => {},
});

export function CartContextProvider(props) {
  const [cartItemsState, setCartItemsState] = useState([]);

  function addItemHandler(item) {
    setCartItemsState((prevItems) => {
      return [...prevItems, item];
    });
  }

  function removeItemHandler(item) {
    setCartItemsState((prevItems) => {
      const index = prevItems.indexOf(item);
      if (index !== -1) {
        prevItems.splice(index, 1);
        return prevItems;
      }
      return prevItems;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItemsState,
        addItemHandler: addItemHandler,
        removeItemHandler: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
