import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/product.module.css";
import axios from "axios";
import { Dispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/cartSlice";

const pizzaitems = {
  id: 1,
  img: "/img/pizza2.png",
  title: "Margarita",
  prices: [19.99, 90.99, 89.99],
  desc: "lorem somewhere thta you can only buy this pizza ,lorem somewhere thta you can only buy this pizza, lorem somewhere thta you can only buy this pizza ",
};

const pizzaimage = {
  image: "/img/size.png",
};

function product({ pizzalist }) {
  const pizza = pizzalist;

  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [extraOptions, setExtraOptions] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  // You have to understand option.price / option.text
  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const eventHandlerchange = (event, option) => {
    const checked = event.target.checked;

    if (checked) {
      changePrice(option.price);
      // Every click or check we add new option to state
      setExtraOptions([...extraOptions, option]);
    } else {
      changePrice(-option.price);
      // DELETE OPTION
      setExtraOptions(extraOptions.filter((extra) => extra._id !== option._id));
    }
  };

  const CartChnageHandler = () => {
    dispatch(addProduct({ ...pizza, price, quantity }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.imgContainer}>
          <Image
            src={pizzaitems.img}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>
          {pizza.title} <span className={classes.spanTitle}> Pizza </span>
        </h1>
        <span className={classes.price}>${price}</span>
        <p className={classes.description}>{pizza.desc}</p>
        <h3 className={classes.chooseSize}> Choose The Size : </h3>
        <div className={classes.sizes}>
          <div className={classes.size} onClick={() => handleSize(0)}>
            <Image src={pizzaimage.image} alt="" layout="fill" />
            <span className={classes.number}> small </span>
          </div>
          <div className={classes.size} onClick={() => handleSize(1)}>
            <Image src={pizzaimage.image} alt="" layout="fill" />
            <span className={classes.number}> Meduim </span>
          </div>
          <div className={classes.size} onClick={() => handleSize(2)}>
            <Image src={pizzaimage.image} alt="" layout="fill" />
            <span className={classes.number}> Large </span>
          </div>
        </div>
        <h3 className={classes.choose}> Choose Additional Inreadience </h3>
        <div className={classes.ingredience}>
          {pizza.extraOptions.map((option) => (
            <div className={classes.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={classes.checkbox}
                onChange={(event) => eventHandlerchange(event, option)}
              />
              <label htmlFor="double"> {option.text} </label>
            </div>
          ))}
        </div>
        <div className={classes.add}>
          <input
            type="number"
            defaultValue={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            className={classes.qauntity}
          />
          <button className={classes.button} onClick={CartChnageHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default product;

export const getServerSideProps = async ({ params }) => {
  // const response = await axios.get("http://localhost:3000/api/products");
  // Fetch Data from Api
  const response = await fetch(
    `http://localhost:3000/api/products/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      pizzalist: data,
    },
  };
};
