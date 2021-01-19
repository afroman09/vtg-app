import React from 'react'
// import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function Main() {
    
    return (
        <React.Fragment>
        <div class="wrapper">
            <div id="img"></div>
            <button id="start-btn" onclick="getImage()">START</button>
        </div>
        </React.Fragment>
    );
}

export default withRouter(Main);