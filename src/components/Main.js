import React from "react";
import { withRouter } from "react-router";
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';

function Main(props) {
  function getImage() {
    let clothes = [img1, img2, img3];
    const result = Math.floor(Math.random() * clothes.length);
    return clothes[result];
  }

  return (
    <React.Fragment>
      <div class="wrapper">
        <div id="img" />
        <button id="start-btn" onclick={getImage()}>
          START
        </button>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Main);
