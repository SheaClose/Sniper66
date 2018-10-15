import React, { Component } from "react";
import "./Media.css";

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let now = new Date().getTime();
    let inHisGraveIsPublished = 1540166400000 < now;
    let fightTogetherIsPublished = 1541376000000 < now;
    return (
      <div id="Media">
        <h1>
          <center>Videos</center>
        </h1>
        <div className="media">
          {fightTogetherIsPublished && (
            <iframe
              className="video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/riGczCN-E_A?rel=0"
              frameBorder="0"
              title="iframe"
              allow="autoplay; encrypted-media"
            />
          )}
          {inHisGraveIsPublished && (
            <iframe
              className="video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SOd0W3rKhDY?rel=0"
              frameBorder="0"
              title="iframe"
              allow="autoplay; encrypted-media"
            />
          )}
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Cobkfw1m-_k?rel=0"
            frameBorder="0"
            title="iframe"
            allow="autoplay; encrypted-media"
          />
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aW5s-bVste8?rel=0"
            frameBorder="0"
            title="iframe"
            allow="autoplay; encrypted-media"
          />
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/33-b6rGFOnA?rel=0"
            frameBorder="0"
            title="iframe"
            allow="autoplay; encrypted-media"
          />
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LoIGRsJH3JU?rel=0"
            frameBorder="0"
            title="iframe"
            allow="autoplay; encrypted-media"
          />
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vJcqxxAGxGI?rel=0"
            frameBorder="0"
            title="iframe"
            allow="autoplay; encrypted-media"
          />
        </div>
        <h1>
          <center>Music</center>
        </h1>
        <div className="media">
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
      </div>
    );
  }
}
export default Media;
