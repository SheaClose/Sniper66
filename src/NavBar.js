import React, { Component } from "react";
import "./CSS/NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";

class NavBar extends Component {
  state = {
    openLinks: false
  };

  openLinks = openLinks => {
    this.setState({ openLinks });
  };

  render() {
    return (
      <div className="nav_container">
        <nav className="nav">
          <div className="nav_darken">
            <div className="center col-1">
              <MenuIcon
                className="pointer"
                onClick={e => this.openLinks(!this.state.openLinks)}
              />
            </div>
            <div className="col-10 center logo-container">
              <div className="sniper-logo-container">
                <img
                  className="sniper-logo"
                  src="https://s3.amazonaws.com/sniper66/Sniper_66_logo_(anni_style).png"
                  alt="Sniper Logo"
                />
              </div>
              <div className="row">
                <div className="col-3" />
                <div className="col-6 icon-container">
                  <a href="https://www.facebook.com/Sniper66atx/">
                    <img
                      src="https://s3.amazonaws.com/sniper66/facebook.png"
                      alt="facebook logo"
                      className="icon"
                    />
                  </a>
                  <a href="https://www.instagram.com/sniper66atx/">
                    <img
                      src="https://s3.amazonaws.com/sniper66/instagram.png"
                      alt="instagram logo"
                      className="icon"
                    />
                  </a>
                  <a href="https://twitter.com/sniper66band">
                    <img
                      src="https://s3.amazonaws.com/sniper66/twitter.png"
                      alt="twitter logo"
                      className="icon"
                    />
                  </a>
                  <a href="https://sniper66.bandcamp.com/">
                    <img
                      src="https://s3.amazonaws.com/sniper66/bandcamp.png"
                      alt="bandcamp logo"
                      className="icon"
                    />
                  </a>
                  <a href="https://www.youtube.com/user/sniper66atx">
                    <img
                      src="https://s3.amazonaws.com/sniper66/youtube.png"
                      alt="youtube logo"
                      className="icon"
                    />
                  </a>
                  <a href="https://itunes.apple.com/us/artist/sniper-66/603573532">
                    <img
                      src="https://s3.amazonaws.com/sniper66/itunes.png"
                      alt="itunes logo"
                      className="icon"
                    />
                  </a>
                  <a href="https://soundcloud.com/sniper66band">
                    <img
                      src="https://s3.amazonaws.com/sniper66/soundcloud.png"
                      alt="soundcloud logo"
                      className="icon"
                    />
                  </a>
                  <a href="https://www.bandsintown.com/en/a/2340819-sniper-66">
                    <img
                      src="https://s3.amazonaws.com/sniper66/bandsintown.png"
                      alt="bandsintown logo"
                      className="icon"
                    />
                  </a>
                </div>
                <div className="col-3" />
              </div>
            </div>
            <div className="center col-1" />
          </div>
        </nav>
        <hr className="hr" />
        <div className={this.state.openLinks ? "link_bar active" : "link_bar"}>
          <ul>
            <li className="col-1">Home</li>
            <li className="col-1">About</li>
            <li className="col-1">Contact</li>
            <li className="col-1">Store</li>
            <li className="col-1">Shows</li>
            <li className="col-1">Media</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
