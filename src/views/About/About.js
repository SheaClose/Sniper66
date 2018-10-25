import React, { Component } from "react";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="About">
        <p className="slim about_text">
          Sniper 66 cultivates a brash, hard hitting brand of punk from their
          home soil in Austin, Texas. They play punk, tight and crisp with
          bullet paced drums. While giving a nod to the forefathers, they also
          blend in the fury of 90’s punk, putting a modern spin on a classic
          genre of music
        </p>
      </div>
    );
  }
}
export default About;
