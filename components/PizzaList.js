import React from "react";
import classes from "./PizzaList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList({ productList }) {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}> The Best Pizza In Sale </h1>
      <p className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut
        sequi culpa animi possimus numquam at recusandae .
      </p>
      <div className={classes.wrapper}>
        {productList?.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
