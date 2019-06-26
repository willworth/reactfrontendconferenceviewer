import React, { Component } from "react";

export default class EnglishIntro extends Component {
  render() {
    return (
      <div>
        <p>Esta applicion es un ejemplo con React.</p>
        <p>
          Lo hice con datos de este sito web:{" "}
          <a href="https://conferences.css-tricks.com/">aqui</a>.{" "}
          <a href="http://willworth.dev/portfolio">Mi portfolio</a>.{" "}
        </p>
      </div>
    );
  }
}
