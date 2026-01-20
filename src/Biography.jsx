import bioimg from "./assets/bio.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Biography() {
  return (
    <>
      <div className="bio-bg" id="bio">
        <div className="bio-container">
          <div className="bio-body" data-aos="fade-up">
            <h2 className="biohead">BIOGRAPHY</h2>
            <p className="bio-text">
              Chrishen Silva is a Young Music Producer from Sri Lanka. Starts
              his music explorations since 2017. Stay tuned with Chrishen and
              explore the sweet spots in music.
            </p>
            <div className="viewcount">
              <h2 className="viewh1">
                <div className="yt">257k+</div>YOUTUBE VIEWS
              </h2>
              <h2 className="viewh2">
                <div className="streams">1800+</div>STREAMS
              </h2>
              <h2 className="viewh3">
                <div className="relno">59</div>RELEASES
              </h2>
            </div>
            <div className="bookdiv">
              <Link to="/studio">
                <button className="book-session-btn">Book a Session</button>
              </Link>
            </div>
          </div>
          <div className="bio-img">
            <img
              src={bioimg}
              alt="Image of Chrishen Silva"
              loading="lazy"
            ></img>
            <div className="bio-overlay-top">
              <p className="bio-cmt">
                Woww guys 😮 You guys have done a great job 🖤✨
              </p>
              <p className="platform">-YouTube-</p>
            </div>
            <div className="bio-overlay-bottom">
              <p className="bio-cmt">Nice one Chrishen💯❤</p>
              <p className="platform">-YouTube-</p>
            </div>
            <div className="bio-overlay-middleR">
              <p className="bio-cmt">
                Awesome work🥰🥰Keep it up....All the best 👍👍
              </p>
              <p className="platform">-YouTube-</p>
            </div>
            <div className="bio-overlay-middleL">
              <p className="bio-cmt">
                We can't stop listening to this, this is the 10000 time
                listening to it but still love it the same😭❤
              </p>
              <p className="platform">-YouTube-</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Biography;
