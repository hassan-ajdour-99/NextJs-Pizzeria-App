import React, { useState } from "react";
import Image from "next/image";
import classes from "../../styles/order.module.css";

function order({ order }) {
  const status = order.status;

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
              <th> ID </th>
              <th> Customer </th>
              <th> Address </th>
              <th> Total </th>
            </tr>
            <tr>
              <td>
                <span className={classes.id}> {order._id} </span>
              </td>
              <td>
                <span className={classes.address}> {order.customer} </span>
              </td>
              <td>
                <span className={classes.price}> {order.address} </span>
              </td>
              <td>
                <span className={classes.total}> ${order.totalAmount} </span>
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
            <b className={classes.totalTextTitle}>
              Subtotal : ${order.totalAmount}
            </b>
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}> Discount : </b> up %50
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>
              TOTAL : Subtotal : ${order.totalAmount}
            </b>
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

export const getServerSideProps = async ({ params }) => {
  // const response = await axios.get("http://localhost:3000/api/products");
  // Fetch Data from Api
  const response = await fetch(`http://localhost:3000/api/orders/${params.id}`);
  const data = await response.json();
  return {
    props: {
      order: data,
    },
  };
};
