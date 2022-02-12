import React, { useState } from "react";
import Image from "next/image";
import classes from "../styles/cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CashOrder from "../components/cashOrder";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { reset } from "../Redux/cartSlice";
import axios from "axios";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [cash, setCash] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  // Cash  Button Handler
  const cashChangeHandler = () => {
    setCash(true);
  };

  // Make Order
  const createOrders = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);

      if (res.status === 201) {
        router.push("/orders/" + res.data._id);
        dispatch(reset());
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Paypal payment Method
  // This values are the props in the UI
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);
    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
              const shipping = details.purchase_units[0].shipping;
              createOrders({
                customer: shipping.name.full_name,
                address: shipping.address_line_1,
                totalAmount: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

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
          {cart.products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={classes.imageContainer}>
                  <Image
                    src={product.image}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </td>
              <td>
                <span className={classes.name}> {product.title} </span>
              </td>
              {/* <td>
                <span className={classes.extras}>{product.extraOptions}</span>
              </td> */}
              <td>
                <span className={classes.price}> {product.prices} </span>
              </td>
              <td>
                <span className={classes.quantity}> {product.quantity} </span>
              </td>
              <td>
                <span className={classes.total}>
                  {product.quantity * product.price}
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className={classes.right}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}> CART TOTAL </h2>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}> Subtotal : {cart.total} </b>
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}> Discount : 0% </b>
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}> TOTAL : {cart.total} </b>
          </div>
          {open ? (
            <div className={classes.paypalBtn}>
              <button className={classes.payCash} onClick={cashChangeHandler}>
                Cash On Delivery
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AR8UYnvMx-IjEJielXCp78IigAAdtXE57V-Ce66YEDPN20rKHb4cBoPkUR7NZjIXpTcuGpmBA8Cy-Elx",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button className={classes.button} onClick={() => setOpen(true)}>
              CheckOut Now!
            </button>
          )}
        </div>
      </div>
      {cash && (
        <CashOrder totalAmount={cart.total} createOrder={createOrders} />
      )}
    </div>
  );
}

export default Cart;
