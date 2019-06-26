import React, { Component } from "react";

export default class EnglishIntro extends Component {
  render() {
    return (
      <div>
        <p>
          This React demo app is a list of (real!) front end developer
          conferences.{" "}
        </p>
        <p>
          As you select a conference from the middle column, the shortlist is
          dynamically updated via state.
        </p>
        <p>
          I built it using data from{" "}
          <a href="https://conferences.css-tricks.com/">here</a>. <br />
          <a href="http://willworth.dev/portfolio">My portfolio</a>.{" "}
        </p>
      </div>
    );
  }
}
