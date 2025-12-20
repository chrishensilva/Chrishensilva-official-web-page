import "./BentoGrid.css";
import i1 from "./assets/Gallery/1.png";
import i2 from "./assets/Gallery/2.jpg";
import i3 from "./assets/Gallery/3.jpg";
import i4 from "./assets/Gallery/4.jpg";
import i5 from "./assets/Gallery/5.jpg";
import i6 from "./assets/Gallery/6.jpg";
import i7 from "./assets/Gallery/7.jpg";
import i8 from "./assets/Gallery/8.jpg";
import i9 from "./assets/Gallery/9.jpg";
import i10 from "./assets/Gallery/10.webp";
import { Button } from "react-scroll";

function Gallery() {
  return (
    <>
      <div className="bento-wrapper">
        <div className="bento-grid">
          <div class="item large">
            <img src={i1}></img>
          </div>
          <div class="item small">
            <img src={i6}></img>
          </div>
          <div class="item small">
            <img src={i3}></img>
          </div>
          <div class="item long">
            <img src={i4}></img>
          </div>
          <div class="item small">
            <img src={i9}></img>
          </div>
          <div class="item tall">
            <img src={i6}></img>
          </div>
          <div class="item long">
            <img src={i7}></img>
          </div>
          <div class="item small">
            <img src={i8}></img>
          </div>
          <div class="item long">
            <img src={i10}></img>
          </div>
          {/*section 2*/}
          <div class="item small">
            <img src={i6}></img>
          </div>
          <div class="item small">
            <img src={i3}></img>
          </div>
          <div class="item large">
            <img src={i1}></img>
          </div>
          <div class="item long">
            <img src={i4}></img>
          </div>
          <div class="item small">
            <img src={i9}></img>
          </div>
          <div class="item tall">
            <img src={i6}></img>
          </div>
          <div class="item long">
            <img src={i7}></img>
          </div>
          <div class="item small">
            <img src={i8}></img>
          </div>
          <div class="item long">
            <img src={i10}></img>
          </div>
        </div>
        <div className="bento-text">
          <h1 className="projh">PROJECT INSIGHTS</h1>
          <p>Explore my music, albums, and artwork</p>
          <button className="explore-btn">Explore more</button>
        </div>
      </div>
    </>
  );
}
export default Gallery;
