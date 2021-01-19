import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
// import Main from "./components/Main";

function Home(props) {
  return (
    <React.Fragment>
      <div>
        <div class="container">
          <h1>Are you a Vintage Clothes?</h1>
          <div class="wrapper">
            <h3>- あなたはヴィンテージが好きですか？ -</h3>
          </div>
          <Link to="/Main">
            <button>好き</button>
          </Link>
          <Link to="">
            <button>よく知らない</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Home);
