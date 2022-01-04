import classes from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <div className={classes.card}>
          <Image src="/images/bg.png" alt="" layout="fill" />
        </div>
        <div className={classes.card}>
          <h2 className={classes.title}>Oh, Yes We DID,</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur
            nobis inventore vitae, facilis porro maiores quaerat delectus vel
          </p>
        </div>
        <div className={classes.card}>
          <h2 className={classes.title}> Find Our Pizza Location </h2>
          <p classeName={classes.address}>Sale eljadida</p>
        </div>
        <div className={classes.card}>
          <h2 className={classes.title}> Working Hours </h2>
          <p>Sturday & Sunday every Single </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
