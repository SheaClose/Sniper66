import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Home">
        <main>
          <img
            className="splash_img"
            src="https://s3.amazonaws.com/sniper66/splash-photo-noXs.png"
            alt="splash_img"
          />
        </main>
      </div>
    );
  }
}
export default Home;
