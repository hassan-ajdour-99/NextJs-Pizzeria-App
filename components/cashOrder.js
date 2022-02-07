import React, { useState } from "react";
import classes from "./cashOrder.module.css";

function CashOrder({ total, createOrder }) {
  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const customerChangeHandler = () => {
    setCustomer(event.target.value);
  };

  const addressChangeHandler = () => {
    setAddress(event.target.value);
  };

  const phoneNumberChangeHandler = () => {
    setPhone(event.target.value);
  };

  const payCashChangeHandler = () => {
    createOrder({ customer, phone, address, method: 0 });
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}> You will pay {total} on Delivery </h3>
        <div className={classes.item}>
          <div className={classes.formControl}>
            <label> Customer : </label>
            <input
              type="text"
              placeholder="customer"
              onChange={customerChangeHandler}
            />
          </div>
          <div className={classes.formControl}>
            <label> Phone Number : </label>
            <input
              type="text"
              placeholder="address"
              onChange={phoneNumberChangeHandler}
            />
          </div>
          <div className={classes.formControl}>
            <label> Address : </label>
            <textarea
              type="text"
              placeholder="address"
              onChange={addressChangeHandler}
            />
          </div>
          <button className={classes.button} onClick={payCashChangeHandler}>
            Cash On delivery
          </button>
        </div>
      </div>
    </div>
  );
}

export default CashOrder;
