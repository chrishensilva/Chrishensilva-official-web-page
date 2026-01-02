import heroimg from "./assets/studio-hero.jpg";
import Card from "./Card";
import Gallery from "./Gallery";
import "./studio.css";

function Studio() {
  return (
    <>
      <div className="studio-hero">
        <img src={heroimg}></img>
        <div className="nav">
          <h1>RedFlame Studios</h1>
          <div className="navbarbtn">
            <button className="navbtn">Book a Session</button>
          </div>
        </div>
        <div className="studio-text">
          <h1 className="studio-heading">
            We Turning ideas <br />
            into timeless sound
          </h1>
          {/*<p>Chrishen Silva</p>*/}
        </div>
      </div>
      <div className="main-wrapper" data-aos="fade-up">
        <h1>WHO ARE WE</h1>
        <div className="main-desc">
          <p>
            RedFlame Studios is a professional music production studio based in
            Sri Lanka, dedicated to delivering high-quality sound for artists,
            creators, and musicians. Led by music producer Chrishen Silva, the
            studio focuses on turning creative ideas into polished,
            industry-ready music. We specialize in music production, mixing, and
            mastering, ensuring every track achieves clarity, depth, and
            emotional impact. From cover songs to original compositions, each
            project is handled with precision, creativity, and attention to
            detail. At RedFlame Studios, we believe sound is more than just
            audio—it’s an experience. Our modern production approach blends
            artistic expression with technical excellence to help artists stand
            out in today’s competitive music industry. Whether you’re an
            emerging artist or an established creator, RedFlame Studios provides
            a creative environment where your music can grow, evolve, and reach
            its full potential.
          </p>
          <a href="#package" className="ex-btn">
            EXPLORE PACKAGES
          </a>
        </div>
      </div>
      <Gallery />
      <div className="pkg" data-aos="fade-up" id="package">
        <h1>DISCOVER PACKAGES & SERVICES</h1>
        <p className="pkgdesc">
          Choose the package that perfectly fits your creative needs.
        </p>
        <Card />
      </div>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} RedFlame Studios. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Studio;
