import React, { Component } from "react";
//import './Shows.css';

class Shows extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Shows">
        <script
          charSet="utf-8"
          src="https://widget.bandsintown.com/main.min.js"
        />
        <a
          className="bit-widget-initializer"
          data-artist-name="Sniper 66"
          data-display-local-dates="true"
          data-display-past-dates="true"
          data-auto-style="false"
          data-text-color="#000000"
          data-link-color="#7F3963"
          data-popup-background-color="#FFFFFF"
          data-background-color="rgba(0,0,0,0)"
          data-display-limit=""
          data-link-text-color="#FFFFFF"
          data-display-lineup="true"
          data-separator-color="rgba(255, 255, 255, 0.5)"
          href="#Home"
        >
          Shows
        </a>
      </div>
    );
  }
}
export default Shows;
