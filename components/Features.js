import React, { useState } from "react";
import Image from "next/image";
import classes from "./Features.module.css";

function Features() {
  const images = ["/img/pizza4.png", "/img/pizza2.png", "/img/pizza3.png"];

  const [index, setIndex] = useState(0);

  function handlerArrow(direction) {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  }
  console.log(index);

  return (
    <div className={classes.container}>
      <div
        className={classes.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handlerArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={classes.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        <div className={classes.imgContainer}>
          {images.map((image, IndexKey) => (
            <div key={IndexKey} className={classes.imgContainer}>
              <Image src={image} alt="" layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
      <div
        className={classes.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handlerArrow("r")}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}

export default Features;
