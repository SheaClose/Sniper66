import React, { Component } from "react";
import "./Merch.css";

class Merch extends Component {
  render() {
    return (
      <div id="Merch">
        <a className="Merch-link" href="https://sniper66.bandcamp.com/merch">
          <img
            className="Merch-image"
            src="https://s3.amazonaws.com/sniper66/merch-store.png"
            alt="Merch Link"
          />
        </a>
      </div>
    );
  }
}
export default Merch;
