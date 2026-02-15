import React from "react";
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

const galleryImages = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10];

function Gallery() {
  return (
    <div className="gallery-section" data-aos="fade-up">
      <div className="gallery-container">
        <div className="gallery-header">
          <h1 className="gallery-title">PROJECT INSIGHTS</h1>
          <p className="gallery-subtitle">Explore my music, albums, and artwork</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Gallery item ${index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span>View Project</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-action">
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
