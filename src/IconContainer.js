import React, { Component } from "react";

class IconContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-3 sm-hide" />
        <div className="col-6 sm-col-12 icon-container">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Sniper66atx/">
            <img
              src="https://s3.amazonaws.com/sniper66/facebook.png"
              alt="facebook logo"
              className="icon"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sniper66atx/">
            <img
              src="https://s3.amazonaws.com/sniper66/instagram.png"
              alt="instagram logo"
              className="icon"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/sniper66band">
            <img
              src="https://s3.amazonaws.com/sniper66/twitter.png"
              alt="twitter logo"
              className="icon"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://sniper66.bandcamp.com/">
            <img
              src="https://s3.amazonaws.com/sniper66/bandcamp.png"
              alt="bandcamp logo"
              className="icon"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/sniper66atx">
            <img
              src="https://s3.amazonaws.com/sniper66/youtube.png"
              alt="youtube logo"
              className="icon"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/artist/sniper-66/603573532">
            <img
              src="https://s3.amazonaws.com/sniper66/itunes.png"
              alt="itunes logo"
              className="icon"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/sniper66band">
            <img
              src="https://s3.amazonaws.com/sniper66/soundcloud.png"
              alt="soundcloud logo"
              className="icon"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.bandsintown.com/en/a/2340819-sniper-66">
            <img
              src="https://s3.amazonaws.com/sniper66/bandsintown.png"
              alt="bandsintown logo"
              className="icon"
            />
          </a>
        </div>
        <div className="col-3 sm-hide" />
      </div>
    );
  }
}
export default IconContainer;
