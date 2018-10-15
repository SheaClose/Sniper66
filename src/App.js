import React, { Component } from "react";
import NavBar from "./NavBar";
import "./CSS/App.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Merch from "./views/Merch/Merch";
import Media from "./views/Media/Media";
import Shows from "./views/Shows/Shows";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="offset">
          <Home />
          <About /> <hr />
          <Merch /> <hr />
          <Media /> <hr />
          <Shows /> <hr />
          <Contact />
          <center style={{ color: "white" }}>
            Site created by <a href="https://sheaclose.com">shea close</a>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
