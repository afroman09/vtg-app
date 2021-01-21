import React from "react";
import { withRouter } from "react-router";
import img1 from "./1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";

const Main = () => {
  function getImage() {
    let clothes = [img1, img2, img3];
    const result = Math.floor(Math.random() * clothes.length);
    const resalt = clothes[result];
    return resalt;
  }

  return (
    <React.Fragment>
      <div class="wrapper">
        <div id="img">{getImage()}</div>
        <button id="start-btn" onclick={getImage()}>
          START
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Main);
