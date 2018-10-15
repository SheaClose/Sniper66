import React, { Component } from "react";
import "./Shows.css";

class Shows extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Shows">
        <h1>
          <center>Shows</center>
        </h1>
        <a
          className="bit-widget-initializer"
          data-artist-name="sniper66"
          data-display-local-dates="false"
          data-display-past-dates="false"
          data-auto-style="false"
          data-text-color="#000000"
          data-link-color="#85181d"
          data-popup-background-color="#FFFFFF"
          data-background-color="rgba(0,0,0,0)"
          data-display-limit="15"
          data-link-text-color="#FFF"
          data-display-lineup="false"
          data-separator-color=""
        />
      </div>
    );
  }
}
export default Shows;
