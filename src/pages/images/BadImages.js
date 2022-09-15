import React from "react";
import ImageTwo from "../../assets/images/two.png";
import ImageThree from "../../assets/images/three.png";
import "./images.modules.css";

function BadImagesPage() {
  return (
    <main>
      <h1>Images with a message</h1>
      <div className="images">
        <img src={ImageTwo} />
        <img src={ImageThree} />
      </div>
    </main>
  );
}

export default BadImagesPage;
