import React, { Component } from "react";
import "./Listing.css";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onshortlist: this.props.onshortlist
    };
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
        <a href={this.props.url}>Website</a>

        <button>button</button>
      </div>
    );
  }
}
export default Listing;
