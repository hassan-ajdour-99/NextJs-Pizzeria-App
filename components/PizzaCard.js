import React from "react";
import Image from "next/image";
import classes from "./PizzaCard.module.css";

function PizzaCard() {
  return (
    <div className={classes.container}>
      <Image src="/img/pizza.png" alt="" width="200" height="200" />
      <h1 className={classes.title}> Margarita Pizza </h1>
      <div className={classes.price}> 79$ </div>
      <div className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        aspernatur, enim animi illo nihil odio iste fugiat cupiditate
        repellendus nam, quod debitis cum dolor quidem eaque velit sint! Rerum,
        consequuntur!
      </div>
    </div>
  );
}

export default PizzaCard;
