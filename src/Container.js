import React, { Component } from "react";
import confsJson from "./confs.json";
import Listing from "./Listing";
import Heading from "./Heading";
import uuid from "uuid/v4";

/*
These functions add a unique id and a boolean for 
the shortlist to each conference being imported from the json.
*/
function addConfDetails(obj) {
  obj.isShortlisted = false;
  obj.id = uuid();
  return obj;
}

const alteredConfs = confsJson.conferences.map(addConfDetails);

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confs: alteredConfs
    };
  }

  render() {
    return (
      <div className="Container">
        {/* <p> conf title is + {this.state.confs[0].title}</p> */}
        <Heading />
        {this.state.confs.map(c => (
          <Listing
            key={c.id}
            title={c.title}
            location={c.location}
            url={c.url}
            byline={c.byline}
            onshortlist={c.onshortlist}
          />
        ))}
      </div>
    );
  }
}
