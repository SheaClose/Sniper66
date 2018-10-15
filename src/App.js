import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./views/Home/Home";
import Loadable from "react-loadable";
import Shows from "./views/Shows/Shows";
import "./CSS/App.css";

class App extends Component {
  state = {
    About: () => <div />,
    Contact: () => <div />,
    Merch: () => <div />,
    Media: () => <div />
  };
  componentDidMount() {
    this.setState({
      About: Loadable({
        loader: () => import("./views/About/About"),
        loading: () => <div> </div>
      }),
      Contact: Loadable({
        loader: () => import("./views/Contact/Contact"),
        loading: () => <div> </div>
      }),
      Merch: Loadable({
        loader: () => import("./views/Merch/Merch"),
        loading: () => <div> </div>
      }),
      Media: Loadable({
        loader: () => import("./views/Media/Media"),
        loading: () => <div> </div>
      })
    });
  }

  render() {
    let { About, Merch, Media, Contact } = this.state;
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
