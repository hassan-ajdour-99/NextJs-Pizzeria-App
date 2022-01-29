import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../styles/cart.module.css";

function Cart() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <table className={classes.table}>
          <tr className={classes.tr}>
            <th> Product </th>
            <th> Name </th>
            <th> Extras </th>
            <th> Product </th>
            <th> Quantity </th>
            <th> Total </th>
          </tr>
          <tr>
            <td>
              <div className={classes.imageContainer}>
                <Image
                  src="/img/pizza2.png"
                  alt=""
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </td>
            <td>
              <span className={classes.name}> Margaerita Pizza </span>
            </td>
            <td>
              <span className={classes.extras}>
                Extras Ingredience , double spicy .
              </span>
            </td>
            <td>
              <span className={classes.price}> 19.90$ </span>
            </td>
            <td>
              <span className={classes.quantity}> 3 </span>
            </td>
            <td>
              <span className={classes.total}> 89$ </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.imageContainer}>
                <Image
                  src="/img/pizza2.png"
                  alt=""
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </td>
            <td>
              <span className={classes.name}> Margaerita Pizza </span>
            </td>
            <td>
              <span className={classes.extras}>
                Extras Ingredience , double spicy .
              </span>
            </td>
            <td>
              <span className={classes.price}> 19.90$ </span>
            </td>
            <td>
              <span className={classes.quantity}> 3 </span>
            </td>
            <td>
              <span className={classes.total}> 89$ </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.imageContainer}>
                <Image
                  src="/img/pizza2.png"
                  alt=""
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </td>
            <td>
              <span className={classes.name}> Margaerita Pizza </span>
            </td>
            <td>
              <span className={classes.extras}>
                Extras Ingredience , double spicy .
              </span>
            </td>
            <td>
              <span className={classes.price}> 19.90$ </span>
            </td>
            <td>
              <span className={classes.quantity}> 3 </span>
            </td>
            <td>
              <span className={classes.total}> 89$ </span>
            </td>
          </tr>
        </table>
      </div>
      <div className={classes.right}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}> CART TOTAL </h2>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}> Subtotal : </b> up %50
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}> Discount : </b> up %50
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}> TOTAL : </b> up %50
          </div>
          <button className={classes.button}> Check Out </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
