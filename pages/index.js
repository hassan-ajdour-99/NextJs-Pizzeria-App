import Head from "next/head";
import classes from "../styles/Home.module.css";
import Features from "../components/Features";
import PizzaList from "../components/PizzaList";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title> Pizza Delivery App </title>
        <meta name="description" content="Best Pizza Show in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      <PizzaList />
    </div>
  );
}
