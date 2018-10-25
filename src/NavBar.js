import React, { Component } from "react";
import "./CSS/NavBar.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconContainer from "./IconContainer";
class NavBar extends Component {
  state = {
    openLinks: false
  };

  openLinks = openLinks => {
    this.setState({ openLinks });
  };

  render() {
    let { openLinks } = this.state;
    return (
      <div className="nav_container">
        <nav className="nav">
          <div className="nav_darken">
            <div className="center col-1">
              <MenuIcon
                id="hamburger"
                className="pointer"
                onClick={e => this.openLinks(!openLinks)}
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
              <div className="top">
                <IconContainer />
              </div>
            </div>
            <div className="center col-1" />
          </div>
        </nav>
        <hr className="hr" />
        <div className={openLinks ? "link_bar active" : "link_bar"}>
          <ul>
            <li className="col-1">
              <a onClick={() => this.openLinks(!openLinks)} href="#Home">
                Home
              </a>
            </li>
            <li className="col-1">
              <a onClick={() => this.openLinks(!openLinks)} href="#Merch">
                Merch
              </a>
            </li>
            <li className="col-1">
              <a onClick={() => this.openLinks(!openLinks)} href="#Media">
                Media
              </a>
            </li>
            <li className="col-1">
              <a onClick={() => this.openLinks(!openLinks)} href="#Shows">
                Shows
              </a>
            </li>
            <li className="col-1">
              <a onClick={() => this.openLinks(!openLinks)} href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
