import React, { Component } from "react";
import NavBar from "./NavBar";
import Loadable from "react-loadable";

import "./CSS/App.css";

const LoadableHome = Loadable({
  loader: () => import("./views/Home/Home"),
  loading: () => <div> </div>
});
const LoadableAbout = Loadable({
  loader: () => import("./views/About/About"),
  loading: () => <div> </div>
});
const LoadableContact = Loadable({
  loader: () => import("./views/Contact/Contact"),
  loading: () => <div> </div>
});
const LoadableMerch = Loadable({
  loader: () => import("./views/Merch/Merch"),
  loading: () => <div> </div>
});
const LoadableMedia = Loadable({
  loader: () => import("./views/Media/Media"),
  loading: () => <div> </div>
});
const LoadableShows = Loadable({
  loader: () => import("./views/Shows/Shows"),
  loading: () => <div> </div>
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="offset">
          <LoadableHome />
          <LoadableAbout /> <hr />
          <LoadableContact /> <hr />
          <LoadableMerch /> <hr />
          <LoadableMedia /> <hr />
          <LoadableShows />
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
