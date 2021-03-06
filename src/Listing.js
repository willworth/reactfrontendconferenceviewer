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
      <div
        className={this.props.onshortlist ? "Listing Shortlisted" : "Listing"}
      >
        <h3>{this.props.title}</h3>
        <p>
          {" "}
          <em>{this.props.byline}</em>
        </p>
        <p className="date">{this.props.date}</p>
        <p>{this.props.location}</p>
        <p>
          {" "}
          <a href={this.props.url}>Website</a>
        </p>
        <button onClick={this.handleToggle}>
          {this.props.onshortlist
            ? "Remove from shortlist"
            : "Add to shortlist"}
        </button>
      </div>
    );
  }
}
export default Listing;
