import Head from "next/head";
import axios from "axios";
import classes from "../styles/Home.module.css";
import Features from "../components/Features";
import PizzaList from "../components/PizzaList";

export default function Home(props) {
  const items = props.ProductList;
  return (
    <div className={classes.container}>
      <Head>
        <title> Pizza Delivery App </title>
        <meta name="description" content="Best Pizza Show in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      <PizzaList productList={items} />
    </div>
  );
}

export const getServerSideProps = async () => {
  // const response = await axios.get("http://localhost:3000/api/products");
  // Fetch Data from Api
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();
  return {
    props: {
      ProductList: data,
    },
  };
};
