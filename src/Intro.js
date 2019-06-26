import React from "react";
import "./styles/Intro.css";
function Intro() {
  return (
    <div className="Intro">
      <div className="titleBox">
        <h1>Frontend conf viewer</h1>
      </div>
      <p>This app is a list of front end developer conferences. </p>
      <p>
        I built it using data from{" "}
        <a href="https://conferences.css-tricks.com/">here</a>.{" "}
      </p>
    </div>
  );
}
export default Intro;
