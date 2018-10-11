import React, { Component } from "react";
import "./Media.css";

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Media" className="media">
        <iframe
          className="media_iframe"
          src="https://bandcamp.com/EmbeddedPlayer/album=977109255/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
          seamless
          title="Buried With Your Boots On by Sniper 66
          "
        >
          <a href="http://sniper66.bandcamp.com/album/buried-with-your-boots-on">
            Buried With Your Boots On by Sniper 66
          </a>
        </iframe>
        <iframe
          className="media_iframe"
          src="https://bandcamp.com/EmbeddedPlayer/album=4014699331/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
          seamless
          title="Sniper 66/Potato Pirates by Sniper 66"
        >
          <a href="http://sniper66.bandcamp.com/album/sniper-66-potato-pirates">
            Sniper 66/Potato Pirates by Sniper 66
          </a>
        </iframe>
        <iframe
          className="media_iframe"
          src="https://bandcamp.com/EmbeddedPlayer/album=2324232717/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
          seamless
          title="Caput Lupinum by Sniper 66"
        >
          <a href="http://sniper66.bandcamp.com/album/caput-lupinum">
            Caput Lupinum by Sniper 66
          </a>
        </iframe>

        <iframe
          className="media_iframe"
          src="https://bandcamp.com/EmbeddedPlayer/album=2852744363/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
          title="Doesn't Matter by Sniper 66"
          seamless
        >
          <a href="http://sniper66.bandcamp.com/album/sniper-66">
            Doesn't Matter by Sniper 66
          </a>
        </iframe>
      </div>
    );
  }
}
export default Media;
