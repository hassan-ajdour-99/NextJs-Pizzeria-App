import React from "react";
import Image from "next/image";
import classes from "./PizzaCard.module.css";
import Link from "next/link";

function PizzaCard({ pizza }) {
  return (
    <div className={classes.card}>
      <Link href={`/product/${pizza._id}`}>
        <Image src={pizza.image} alt="alt" width="200" height="200" passHref />
      </Link>
      <h1 className={classes.title}> {pizza.title} </h1>
      <div className={classes.description}> {pizza.desc} </div>
      <div className={classes.price}> {pizza.prices[0]} </div>
      <div className={classes.detail}> View More </div>
    </div>
  );
}

export default PizzaCard;
