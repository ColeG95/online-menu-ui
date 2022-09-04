import classes from "./MenuItem.module.css";
import MenuItemForm from "./MenuItemForm";

function MenuItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.h3}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MenuItemForm item={props.item} />
      </div>
    </li>
  );
}

export default MenuItem;
