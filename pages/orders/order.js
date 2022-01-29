import React, { useState } from "react";
import Image from "next/image";
import classes from "../../styles/order.module.css";

function order() {
  const status = 0;

  const StatusClass = (index) => {
    if (index - status < 1) {
      return classes.done;
    }
    if (index - status === 1) {
      return classes.inprogress;
    }
    if (index - status > 1) {
      return classes.undone;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.row}>
          <table className={classes.table}>
            <tr className={classes.tr}>
              <th> ORDER ID </th>
              <th> CUSTOMER </th>
              <th> ADDRESS </th>
              <th> Total </th>
            </tr>
            <tr>
              <td>
                <span className={classes.id}> 083868A6286898 </span>
              </td>
              <td>
                <span className={classes.address}> JOE DOE </span>
              </td>
              <td>
                <span className={classes.price}> Rabat Sale , 11000 </span>
              </td>
              <td>
                <span className={classes.total}> 89$ </span>
              </td>
            </tr>
          </table>
        </div>
        <div className={classes.row}>
          <div className={StatusClass(0)}>
            <Image src="/img/paid.png" alt="" width={20} height={20} />
            <span>Payment</span>
            <Image
              src="/img/checked.png"
              width={20}
              height={20}
              alt=""
              className={classes.checkedIcon}
            />
          </div>
          <div className={StatusClass(1)}>
            <Image src="/img/paid.png" alt="" width={20} height={20} />
            <span>Prepering</span>
            <Image
              src="/img/checked.png"
              width={20}
              height={20}
              alt=""
              className={classes.checkedIcon}
            />
          </div>
          <div className={StatusClass(2)}>
            <Image src="/img/paid.png" alt="" width={20} height={20} />
            <span>On the Way</span>
            <Image
              src="/img/checked.png"
              width={20}
              height={20}
              alt=""
              className={classes.checkedIcon}
            />
          </div>
          <div className={StatusClass(3)}>
            <Image src="/img/paid.png" alt="" width={20} height={20} />
            <span> Delivered </span>
            <Image
              src="/img/checked.png"
              className={classes.checkedIcon}
              alt=""
              width={20}
              height={20}
              className={classes.checkedIcon}
            />
          </div>
        </div>
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
          <button disabled className={classes.button}>
            Paid
          </button>
        </div>
      </div>
    </div>
  );
}

export default order;
