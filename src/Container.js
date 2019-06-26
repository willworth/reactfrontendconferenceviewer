import React, { Component } from "react";
import confsJson from "./confs.json";
import Listing from "./Listing";
import Intro from "./Intro";
import uuid from "uuid/v4";
import "./styles/Container.css";
import "./styles/Shortlist.css";
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

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confs: alteredConfs
    };
    this.toggleShortlist = this.toggleShortlist.bind(this);
    // this.getShortlistedConfs = this.getShortlistedConfs.bind(this);
  }

  toggleShortlist(id) {
    const updatedShortlist = this.state.confs.map(c => {
      if (c.id === id) {
        return { ...c, isShortlisted: !c.isShortlisted };
      } else {
        return c;
      }
    });
    this.setState({
      confs: updatedShortlist
    });
  }

  // getShortlistedConfs() {
  //   const shortlistedConfs = this.state.confs.filter(function(conf) {
  //     return conf.isShortlisted;
  //   });
  // }

  render() {
    let newShortlist = this.state.confs.filter(conf => conf.isShortlisted);

    return (
      <div className="Container">
        <Intro className="Intro" />

        <div className="Listings">
          <div className="titleBox">
            <h1>Upcoming confs:</h1>
          </div>
          {this.state.confs.map(c => (
            <Listing
              key={c.id}
              id={c.id}
              title={c.title}
              location={c.location}
              date={c.date.slice(0, 16)}
              url={c.url}
              byline={c.byline}
              onshortlist={c.isShortlisted}
              toggler={this.toggleShortlist}
            />
          ))}
        </div>
        <div className="Shortlist">
          <div className="titleBox">
            <h1>Your shortlist:</h1>
          </div>
          {newShortlist.map(c => (
            <Listing
              key={c.id}
              id={c.id}
              title={c.title}
              location={c.location}
              date={c.date.slice(0, 16)}
              url={c.url}
              byline={c.byline}
              onshortlist={c.isShortlisted}
              toggler={this.toggleShortlist}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Container;
