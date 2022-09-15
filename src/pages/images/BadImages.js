import React from "react";
import ImageTwo from "../../assets/images/two.png";
import ImageThree from "../../assets/images/three.png";
import styles from "./images.module.css";

function BadImagesPage() {
  return (
    <main>
      <h1>Images with a message</h1>
      <div className={styles.images}>
        <img src={ImageTwo} />
        <img src={ImageThree} />
      </div>
    </main>
  );
}

export default BadImagesPage;
