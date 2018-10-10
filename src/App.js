import React, { Component } from "react";
import NavBar from "./NavBar";
import "./CSS/App.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Store from "./views/Store/Store";
import Media from "./views/Media/Media";
import Shows from "./views/Shows/Shows";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <img
            className="splash_img"
            src="https://s3.amazonaws.com/sniper66/IMGL5197.jpg"
            alt="splash_img"
          />
          <Home />
          <About />
          <Contact />
          <Store />
          <Media />
          <Shows />
        </main>
      </div>
    );
  }
}

export default App;
