import React from "react";
import "./styles/Intro.css";
function Intro() {
  return (
    <div>
      <h1 className="Intro">Frontend conf viewer</h1>
      <p>This app is a list of front end developer conferences. </p>
      <p>
        I built it using data from{" "}
        <a href="https://conferences.css-tricks.com/">here</a>.{" "}
      </p>
    </div>
  );
}
export default Intro;
