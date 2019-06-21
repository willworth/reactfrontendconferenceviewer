import React, { Component } from "react";
import "./styles/Listing.css";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onshortlist: this.props.isShortlisted
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.props.toggler(this.props.id);
  }

  render() {
    return (
      <div className="Listing">
        <h3>{this.props.title}</h3>
        <p>
          {" "}
          <em>{this.props.byline}</em>
        </p>
        <p>{this.props.location}</p>
        <p>
          {" "}
          <a href={this.props.url}>Website</a>
        </p>
        <button onClick={this.handleToggle}>button</button>
      </div>
    );
  }
}
export default Listing;
