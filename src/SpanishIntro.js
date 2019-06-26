import React, { Component } from "react";

export default class EnglishIntro extends Component {
  render() {
    return (
      <div>
        <p>Esta aplicación es un ejemplo con React.</p>
        <p>
          La columna del centro lleva conferencias front-end(de verdad!). Cuando
          pinchas, el resultado es que el listado a la derecha se actualiza
          automáticamente
        </p>
        <p>
          Lo hice con datos de este sito web:{" "}
          <a href="https://conferences.css-tricks.com/">aqui</a>. <br />
          <a href="http://willworth.dev/portfolio">Mi portfolio</a>.{" "}
        </p>
      </div>
    );
  }
}
