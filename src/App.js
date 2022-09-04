import "./App.css";
import MenuList from "./MenuList/MenuList";
import MessageBox from "./MessageBox/MessageBox";
import Cart from "./modal/Cart";
import NavBar from "./NavBar/NavBar";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }

  const foodItems = [
    {
      id: 1,
      name: "Classic BBQ Sandwhich",
      description: "Our homestyle pulled pork BBQ with sweet carolina sauce!",
      price: 15.99,
    },
    {
      id: 2,
      name: "Steak and Cheese",
      description: "Juicy grilled steak strips and mozarella cheese... mmmmm",
      price: 13.99,
    },
    {
      id: 3,
      name: "Heart Attack on-a-plate",
      description:
        "1/2 pound patty stacked with egg, lettuce, tomato, brisket bits, & fried onion. You sure you can handle it?",
      price: 16.99,
    },
  ];

  return (
    <>
      {cartIsShown && <Cart hideCart={hideCartHandler} />}
      <NavBar title="ReactMeals" showCart={showCartHandler} />
      <main>
        <MessageBox title="" messageText="" />
        <MenuList foodItems={foodItems} />
      </main>
    </>
  );
}

export default App;
