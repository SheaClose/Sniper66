import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./views/Home/Home";
import Shows from "./views/Shows/Shows";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Merch from "./views/Merch/Merch";
import Media from "./views/Media/Media";
import "./CSS/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="offset">
          <Home />
          <About />
          <hr />
          <Merch />
          <hr />
          <Media />
          <hr />
          <Shows />
          <hr />
          <Contact />
          <center style={{ color: "white" }}>
            Site created by{" "}
            <a style={{ textDecoration: "none" }} href="https://sheaclose.com">
              shea close
            </a>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
