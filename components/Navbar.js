import classes from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className={classes.container}>
      <h1 className={classes.brand}>MeinePizzeria</h1>
      <div className={classes.item}>
        <div className={classes.callButton}>
          <Image src="/img/telephone.png" alt="" height="30px" width="30px" />
        </div>
        <div className={classes.texts}>
          <div className={classes.text}> Order Now! </div>
          <div className={classes.text}> O623257633 </div>
        </div>
      </div>
      <div className={classes.item}>
        <ul className={classes.list}>
          <Link href="/product/products">
            <li className={classes.listItem}> Products </li>
          </Link>
          <li className={classes.listItem}> Blogs </li>
          <li className={classes.listItem}> Contact </li>
        </ul>
      </div>
      <div className={classes.item}>
        <div className={classes.cart}>
          <Image src="/img/cart.png" alt="" width="35px" height="35px" />
          <div className={classes.counter}> 2 </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
