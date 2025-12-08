import img1 from "./assets/vid1.png";

function Video() {
  return (
    <>
      <div className="vid-container">
        <div className="vid-text" data-aos="fade-up">
          <h2>ALSO LISTEN TO</h2>
        </div>
        <div className="vid-button" data-aos="fade-up">
          <button className="allrelease3">
            <a
              href="https://open.spotify.com/track/6d915ul56vXr8tyy6taQ2Q?si=36752dd2f9864ebe"
              target="_blank"
            >
              LISTEN ON SPOTIFY
            </a>
          </button>
          <button className="allrelease3">
            <a
              href="https://music.apple.com/sg/song/pem-hamuwa/1751563846"
              target="_blank"
            >
              LISTEN ON iTUNES
            </a>
          </button>
          <a href="https://www.youtube.com/@Chrishensilva" target="_blank">
            <button className="allrelease3">VIEW ON YOUTUBE</button>
          </a>
        </div>
        <div className="vid-link" data-aos="fade-up">
          {/*<video src={vid1} className='link'></video>*/}
          <iframe
            className="link"
            src="https://www.youtube.com/embed/qcFgKxCx8MM"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default Video;
