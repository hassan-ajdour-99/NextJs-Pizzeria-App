import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/product.module.css";

const pizza = {
  id: 1,
  img: "/img/pizza2.png",
  name: "Margarita",
  price: [19.99, 90.99, 89.99],
  description:
    "lorem somewhere thta you can only buy this pizza ,lorem somewhere thta you can only buy this pizza, lorem somewhere thta you can only buy this pizza ",
};

function product() {
  const [Size, setSize] = useState(1);

  console.log(Size);
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
        <span className={classes.price}>${pizza.price[Size]}</span>
        <p className={classes.description}>{pizza.description}</p>
        <h3 className={classes.chooseSize}> Choose The Size : </h3>
        <div className={classes.sizes}>
          <div className={classes.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={classes.number}> small </span>
          </div>
          <div className={classes.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={classes.number}> Meduim </span>
          </div>
          <div className={classes.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={classes.number}> Large </span>
          </div>
        </div>
        <h3 className={classes.choose}> Choose Additional Inreadience </h3>
        <div className={classes.ingredience}>
          <div className={classes.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={classes.checkbox}
            />
            <label htmlFor="double"> Double Incredience </label>
          </div>
          <div className={classes.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={classes.checkbox}
            />
            <label htmlFor="spicy"> Extra Chesse </label>
          </div>
          <div className={classes.option}>
            <input
              type="checkbox"
              id="garlis"
              name="garlis"
              className={classes.checkbox}
            />
            <label htmlFor="garlis"> Garlis sousse </label>
          </div>
          <div className={classes.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={classes.checkbox}
            />
            <label htmlFor="spicy"> Spicy Sousse </label>
          </div>
        </div>
        <div className={classes.add}>
          <input type="number" defaultValue={1} className={classes.qauntity} />
          <button className={classes.button}> Add to cart </button>
        </div>
      </div>
    </div>
  );
}

export default product;