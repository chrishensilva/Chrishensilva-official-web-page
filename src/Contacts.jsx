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
  const socialLinks = [
    { url: "https://www.facebook.com/chrishen.silva.2025", icon: fb, name: "Facebook" },
    { url: "https://www.instagram.com/chrishen_silva/", icon: inster, name: "Instagram" },
    { url: "https://open.spotify.com/artist/5XShvesrxeUmkwuCN4Lm6P?si=hWyskldBSJ6UF-awS6gkYA", icon: spotify, name: "Spotify" },
    { url: "https://music.apple.com/sg/artist/chrishen-silva/1549622928", icon: itunes, name: "Apple Music" },
    { url: "https://www.youtube.com/@Chrishensilva", icon: yt, name: "YouTube" },
    { url: "https://on.soundcloud.com/mo9nQA1ZPCbZVfJIPW", icon: soundcloud, name: "SoundCloud" },
    { url: "https://link.deezer.com/s/31yJLmensk3WYe27BEhRu", icon: deezer, name: "Deezer" }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container" data-aos="fade-up">
        <div className="contact-grid">

          <div className="contact-sidebar">
            <div className="section-head">
              <h2 className="section-title">GET IN TOUCH</h2>
              <p className="section-subtitle">Have a project in mind or want to collaborate? Feel free to reach out across any platform.</p>
            </div>

            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <img src={home} alt="location" />
                </div>
                <div className="info-text">
                  <h3>Our Studio</h3>
                  <p>No.76, Walanagoda, Katunayake</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <img src={email} alt="email" />
                </div>
                <div className="info-text">
                  <h3>Email Me</h3>
                  <p>chrishensilva@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <img src={tele} alt="phone" />
                </div>
                <div className="info-text">
                  <h3>Call Anytime</h3>
                  <p>+94 70 169 0749</p>
                  <p>+94 76 222 5024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-social-card">
            <div className="social-header">
              <h3>Connect Online</h3>
              <p>Follow the journey on streaming and social platforms.</p>
            </div>
            <div className="social-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title={link.name}
                >
                  <img src={link.icon} alt={link.name} className="social-icon" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacts;
