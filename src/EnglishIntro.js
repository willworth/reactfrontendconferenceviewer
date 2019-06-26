import React, { Component } from "react";

export default class EnglishIntro extends Component {
  render() {
    return (
      <div>
        <p>This app is a list of front end developer conferences. </p>
        <p>
          I built it using data from{" "}
          <a href="https://conferences.css-tricks.com/">here</a>.{" "}
        </p>
      </div>
    );
  }
}
