import CartButton from "./CartButton";
import classes from "./NavBar.module.css";
import mealsImage from "../assets/meals.jpeg";

function NavBar(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>{props.title}</h1>
        <CartButton onClick={props.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}

export default NavBar;
