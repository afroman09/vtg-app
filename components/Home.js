import React from "react";

export default function Home() {
  return (
    <div>
      <div class="container">
        <h1>Want to Vintage Clothes?</h1>
        <div class="wrapper">
          <ul class="box">
            <li id="img">画像を表示</li>
            <li id="text">テキストを表示</li>
          </ul>
          <input type="button" value="START" id="start-btn"></input>
        </div>
      </div>
    </div>
  );
}
