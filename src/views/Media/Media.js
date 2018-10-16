import React, { Component } from "react";
import "./Media.css";

class Media extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var div,
        n,
        v = document.getElementsByClassName("youtube-player");
      for (n = 0; n < v.length; n++) {
        div = document.createElement("div");
        div.setAttribute("data-id", v[n].dataset.id);
        div.innerHTML = labnolThumb(v[n].dataset.id);
        div.onclick = labnolIframe;
        v[n].appendChild(div);
      }
    });

    function labnolThumb(id) {
      var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
      return thumb.replace("ID", id) + play;
    }

    function labnolIframe() {
      var iframe = document.createElement("iframe");
      var embed = "https://www.youtube.com/embed/ID?autoplay=1";
      iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
      iframe.setAttribute("class", "media_iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "1");
      this.parentNode.replaceChild(iframe, this);
    }
  }

  render() {
    let now = new Date().getTime();
    let inHisGraveIsPublished = 1540166400000 < now;
    let fightTogetherIsPublished = 1541376000000 < now;
    return (
      <div id="Media">
        <h1>
          <center>videos</center>
        </h1>
        <div className="media">
          {fightTogetherIsPublished && (
            <div class="youtube-player" data-id="riGczCN-E_A" />
          )}
          {inHisGraveIsPublished && (
            <div class="youtube-player" data-id="SOd0W3rKhDY" />
          )}
          <div class="youtube-player" data-id="Cobkfw1m-_k" />
          <div class="youtube-player" data-id="aW5s-bVste8" />
          <div class="youtube-player" data-id="33-b6rGFOnA" />
          <div class="youtube-player" data-id="LoIGRsJH3JU" />
          <div class="youtube-player" data-id="vJcqxxAGxGI" />
        </div>
        <hr />
        <h1>
          <center>music</center>
        </h1>
        <div className="media">
          <iframe
            className="music_iframe"
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
            className="music_iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=4014699331/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="Sniper 66/Potato Pirates by Sniper 66"
          >
            <a href="http://sniper66.bandcamp.com/album/sniper-66-potato-pirates">
              Sniper 66/Potato Pirates by Sniper 66
            </a>
          </iframe>
          <iframe
            className="music_iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=2324232717/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="Caput Lupinum by Sniper 66"
          >
            <a href="http://sniper66.bandcamp.com/album/caput-lupinum">
              Caput Lupinum by Sniper 66
            </a>
          </iframe>

          <iframe
            className="music_iframe"
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
