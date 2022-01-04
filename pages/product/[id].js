import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/product.module.css";

function product() {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza2.png",
    name: "Margarita",
    price: [19.99, 9.99, 89.99],
    description:
      "lorem somewhere thta you can only buy this pizza ,lorem somewhere thta you can only buy this pizza, lorem somewhere thta you can only buy this pizza ",
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.imgContainer}>
          <Image
            src={pizza.img}
            alt={pizza.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>
          {pizza.name} <span className={classes.spanTitle}> Pizza </span>
        </h1>
        <span className={classes.price}>${pizza.price[0]}</span>
        <p className={classes.description}>{pizza.description}</p>
        <h3 className={classes.chooseSize}> Choose The Size : </h3>
        <div className={classes.sizes}>
          <div className={classes.size}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={classes.number}> small </span>
          </div>
          <div className={classes.size}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={classes.number}> Meduim </span>
          </div>
          <div className={classes.size}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={classes.number}> Large </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default product;
