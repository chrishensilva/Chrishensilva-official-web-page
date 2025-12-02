import fb from "./assets/logo/fb.png";
import inster from "./assets/logo/inster.png";
import spotify from "./assets/logo/spotify.png";
import itunes from "./assets/logo/itunes.png";
import yt from "./assets/logo/yt.png";
import soundcloud from "./assets/logo/soundcloud.png";
import deezer from "./assets/logo/deezer.png";
import tele from "./assets/logo/tele.png";
import email from "./assets/logo/email.png";
import home from "./assets/logo/home.png";
function Contacts() {
  return (
    <>
      <div className="contact-main" id="contact">
        <div className="contact-container">
          <div className="contact-head">
            <h2>CONTACT</h2>
            <p>
              Follow me on social media platforms and keep in touch with
              Chrishen
            </p>
          </div>
          <div className="contact-body">
            <div className="contact-me">
              <div className="contact-heading">
                <h3>
                  <img src={home} className="conlogo"></img> Address
                </h3>
                <h3>
                  <img src={email} className="conlogo"></img>Email
                </h3>
                <h3>
                  <img src={tele} className="conlogo"></img>Contact Number
                </h3>
              </div>
              <div className="contact-p">
                <p>No.76, Walanagoda, Katunayake</p>
                <p>chrishensilva@gmail.com</p>
                <p>070 169 0749/076 222 5024</p>
              </div>
            </div>
          </div>
          <div className="socialmedia">
            <h3 data-aos="fade-up">Follow me on</h3>
            <div className="media">
              <a
                href="https://www.facebook.com/chrishen.silva.2025"
                target="_blank"
              >
                <img
                  src={fb}
                  alt="Logo of facebook"
                  loading="lazy"
                  className="logo"
                ></img>
              </a>
              <a
                href="https://www.instagram.com/chrishen_silva/"
                target="_blank"
              >
                <img
                  src={inster}
                  alt="Logo of instergram"
                  loading="lazy"
                  className="logo"
                ></img>
              </a>
              <a
                href="https://open.spotify.com/artist/5XShvesrxeUmkwuCN4Lm6P?si=hWyskldBSJ6UF-awS6gkYA"
                target="_blank"
              >
                <img
                  src={spotify}
                  alt="Logo of spotify"
                  loading="lazy"
                  className="logo"
                ></img>
              </a>
              <a
                href="https://music.apple.com/sg/artist/chrishen-silva/1549622928"
                target="_blank"
              >
                <img
                  src={itunes}
                  alt="Logo of itunes"
                  loading="lazy"
                  className="logo"
                ></img>
              </a>
              <a href="https://www.youtube.com/@Chrishensilva" target="_blank">
                <img
                  src={yt}
                  alt="Logo of youtube"
                  loading="lazy"
                  className="logo"
                ></img>
              </a>
              <a
                href="https://on.soundcloud.com/mo9nQA1ZPCbZVfJIPW"
                target="_blank"
              >
                <img
                  src={soundcloud}
                  alt="Logo of soundcloud"
                  loading="lazy"
                  className="logo"
                ></img>
              </a>
              <a
                href="https://link.deezer.com/s/31yJLmensk3WYe27BEhRu"
                target="_blank"
              >
                <img
                  src={deezer}
                  alt="Logo of deezer"
                  loading="lazy"
                  className="logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
