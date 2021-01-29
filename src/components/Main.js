import React, {useState} from "react";
import { withRouter } from "react-router";
import img1 from "../assets/img/utumi.jpeg";
import img2 from "../assets/img/komaba.jpeg";

const Main = () => {

  const [img, setImg] = useState([
    img1,
    img2,
  ])

  const changeImg = () => {
    const result = Math.floor(Math.random() * img.length);
    setImg(img[result]);
    return setImg
  }

  // const getImage = () => {
  //   const result = Math.floor(Math.random() * clothes.length);
  //   const resalt = clothes[result];
  //   return resalt
  // }

  return (
    <React.Fragment>
      <div class="wrapper">
        <img src={changeImg()} alt="画像"></img>
        <button id="start-btn" onClick={() => changeImg()}>
          START
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Main);
