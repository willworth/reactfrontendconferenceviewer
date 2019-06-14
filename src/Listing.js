import React from "react";

function Listing(props) {
  return (
    <div className="Listing">
      <h3>{props.title}</h3>
      <p>
        {" "}
        <em>{props.byline}</em>
      </p>
      <p>{props.location}</p>
      <a href={props.url}>Website</a>
    </div>
  );
}
export default Listing;
