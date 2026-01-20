import img1 from "./assets/gallery/1.webp";
import img2 from "./assets/gallery/2.webp";
import img3 from "./assets/gallery/3.webp";
import img4 from "./assets/gallery/4.webp";
import img5 from "./assets/gallery/5.webp";

function Album() {
  return (
    <>
      <div className="album-body">
        <div className="album-img">
          <div className="imgbox1" data-aos="fade-up">
            <img
              src={img1}
              alt="Image of Chrishen Silva"
              loading="lazy"
              className="img1"
            ></img>
          </div>
          <div className="imgbox2" data-aos="fade-up">
            <img
              src={img2}
              alt="Image of Chrishen Silva"
              loading="lazy"
              className="img2"
            ></img>
          </div>
          <div className="imgbox3" data-aos="fade-up">
            <img
              src={img3}
              alt="Image of Chrishen Silva"
              loading="lazy"
              className="img3"
            ></img>
          </div>
          <div className="imgbox4" data-aos="fade-up">
            <img
              src={img4}
              alt="Image of Chrishen Silva"
              loading="lazy"
              className="img4"
            ></img>
          </div>
          <div className="imgbox5" data-aos="fade-up">
            <img
              src={img5}
              alt="Image of Chrishen Silva"
              loading="lazy"
              className="img5"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Album;
