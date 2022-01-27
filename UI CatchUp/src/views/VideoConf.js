import React from "react";
import {Helmet} from "react-helmet";


import VideoCService from "../services/video-conf";

// reactstrap components
import { Input } from "reactstrap";

// core components

class VideoConf extends React.Component {
  componentDidMount() {
    //document.documentElement.scrollTop = 0;
    //document.scrollingElement.scrollTop = 0;
    //this.refs.main.scrollTop = 0;

    const script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <>
        <div>
          <Helmet>
            <script
              src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
              integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
              integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
              crossorigin="anonymous"
            ></script>
            <script defer src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
            <script src="/socket.io/socket.io.js" defer></script>
            <script src="https://kit.fontawesome.com/c939d0e917.js"></script>
            <script src="script.js" defer></script>
          </Helmet>
        </div>

        <div className="main">
          <div className="main__left">
            <div className="main__videos">
              <div id="video-grid"></div>
            </div>
            <div className="main__controls">
              <div className="main__controls__block">
                <div
                  onclick="muteUnmute()"
                  className="main__controls__button main__mute_button"
                >
                  <i className="fa fa-microphone" />
                  <span>Mute</span>
                </div>
                <div
                  onclick="playStop()"
                  className="main__controls__button main__video_button"
                >
                  <i className="fa fa-video-camera" />
                  <span>Stop Video</span>
                </div>
              </div>
              <div className="main__controls__block">
                <div className="main__controls__button">
                  <i className="fa fa-users" />
                  <span>Participants</span>
                </div>
              </div>
              <div className="main__controls__block">
                <div className="main__controls__button">
                  <span className="leave_meeting">Leave Meeting</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main__right">
            <div className="main__header">
              <h6>Chat</h6>
            </div>
            <div className="main__chat_window">
              <ul className="messages"></ul>
            </div>
            <div className="main__message_container">
              <Input
                id="chat_message"
                type="text"
                placeholder="Type message here..."
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VideoConf;
