import React from "react";
import Image from "next/image";
import classes from "./Features.module.css";

function Features() {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer}>
        <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.imgContainer}>
          {images.map((image, index) => (
            <Image src="/img/featured.png" key={index} alt="" layout="fill" />
          ))}
        </div>
      </div>
      <div className={classes.arrowContainer}>
        <Image src="/img/arrowr.png" alt="" layout="fill" />
      </div>
    </div>
  );
}

export default Features;
