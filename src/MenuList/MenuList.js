import MenuItem from "./MenuItem";
import classes from "./MenuList.module.css";
import Card from "../UI/Card";

function MenuList(props) {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {props.foodItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default MenuList;
