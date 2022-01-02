import React from "react";
import classes from "./PizzaList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}> The Best Pizza In Sale </h1>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut
        sequi culpa animi possimus numquam at recusandae, iure accusamus
        suscipit, perferendis veniam voluptates eveniet modi hic deleniti
        laudantium nesciunt. Odio. Natus aperiam nam culpa voluptatibus pariatur
        atque laboriosam, quis vitae asperiores aliquid possimus.
      </p>
      <div className={classes.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default PizzaList;
