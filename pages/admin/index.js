import React from "react";
import Image from "next/image";
import classes from "../../styles/admin.module.css";
import axios from "axios";

function index({ products, orders }) {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.products}>
          <h1 className={classes.title}> Products : </h1>
          <table className={classes.table}>
            <tbody>
              <tr className={classes.trTitle}>
                <th> Image </th>
                <th> Id </th>
                <th> Title </th>
                <th> Price </th>
                <th> Action </th>
              </tr>
            </tbody>
            {products.map((product) => (
              <tbody key={product._id}>
                <tr className={classes.trTitle}>
                  <th>
                    <Image
                      src={product.image}
                      alt=""
                      width={50}
                      height={50}
                      objectFit="cover"
                    />
                  </th>
                  <th> {product._id} </th>
                  <th> {product.name} </th>
                  <th> {product.price} </th>
                  <th>
                    <button className={classes.button}> Edit </button>
                    <button className={classes.button}> delete </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className={classes.orders}>
          <h1 className={classes.title}> Orders : </h1>
          <table className={classes.table}>
            <tbody>
              <tr className={classes.trTitle}>
                <th> Id </th>
                <th> Customer </th>
                <th> Total </th>
                <th> Payment </th>
                <th> Status </th>
                <th> Action </th>
              </tr>
            </tbody>
            <tbody>
              <tr className={classes.trTitle}>
                <th>78333333333333330</th>
                <th> Joe Mata </th>
                <th> $899 </th>
                <th> Paid </th>
                <th> 1 </th>
                <th>
                  <button className={classes.button}> Next Page </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={classes.item}></div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const productResponse = await axios.get("http://localhost:3000/api/products");
  const orderResponse = await axios.get("http://localhost:3000/api/orders");

  const allProducts = productResponse.data;
  const allOrders = orderResponse.data;

  return {
    props: {
      products: allProducts,
      orders: allOrders,
    },
  };
};

export default index;
