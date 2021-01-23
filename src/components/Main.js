import React/*, {useState} */from "react";
import { withRouter } from "react-router";
import img1 from "../assets/img/utumi.jpeg";
import img2 from "../assets/img/komaba.jpeg";

const Main = () => {

// const [testImg, testImgs] = useState("");

  function getImage() {
    let clothes = [img1, img2];
    const result = Math.floor(Math.random() * clothes.length);
    const resalt = clothes[result];
    return resalt;
  }

  // const testimg = getImage();

  return (
    <React.Fragment>
      <div class="wrapper">
        <img id="testImg" alt="" value = {getImage()}></img>
        <button id="start-btn" onclick={getImage()}>
          START
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Main);
