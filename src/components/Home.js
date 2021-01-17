import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
    <div>
      <div class="container">
        <h1>Are you a Vintage Clothes?</h1>
        <div class="wrapper">
        <h2>あなたはヴィンテージが好きですか？</h2>
        </div>
      </div>
    </div>
        <Link to="/Main">
          <button>好き</button>
        </Link>
        </React.Fragment>
  );
}

export default withRouter(Home);