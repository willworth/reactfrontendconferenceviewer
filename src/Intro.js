import React, { Component } from "react";
import "./styles/Intro.css";
import EnglishIntro from "./EnglishIntro";
import SpanishIntro from "./SpanishIntro";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      english: true
    };
    this.toggleLang = this.toggleLang.bind(this);
  }

  toggleLang() {
    this.setState({
      english: !this.state.english
    });
  }

  render() {
    return (
      <div className="Intro">
        <div className="titleBox">
          <h1>Frontend conf viewer</h1>
        </div>
        <button onClick={this.toggleLang}>
          {this.state.english ? "Haz click para español!" : "Show in English"}
        </button>
        <p>{this.state.english ? <EnglishIntro /> : <SpanishIntro />}</p>
      </div>
    );
  }
}
export default Intro;
