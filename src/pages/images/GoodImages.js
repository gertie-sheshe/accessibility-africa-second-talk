import React from "react";
import ImageTwo from "../../assets/images/two.png";
import ImageThree from "../../assets/images/three.png";
import styles from "./images.module.css";

function GoodImagesPage() {
  return (
    <main>
      <h1>Images with a message</h1>
      <div className={styles.images}>
        <img src={ImageTwo} alt="" />
        <img
          src={ImageThree}
          alt="Quote by Tim Berner's Lee:'The power of the web is in it's universality'"
        />
      </div>
    </main>
  );
}

export default GoodImagesPage;
