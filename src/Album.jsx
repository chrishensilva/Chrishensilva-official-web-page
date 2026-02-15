import React from 'react';
import img1 from "./assets/gallery/1.webp";
import img2 from "./assets/gallery/2.webp";
import img3 from "./assets/gallery/3.webp";
import img4 from "./assets/gallery/4.webp";
import img5 from "./assets/gallery/5.webp";

function Album() {
  const images = [
    { src: img1, alt: "Studio setup and production" },
    { src: img2, alt: "Vocal recording session" },
    { src: img3, alt: "Mix board and hardware" },
    { src: img4, alt: "Collaborative session" },
    { src: img5, alt: "Live performance capture" }
  ];

  return (
    <section className="album-section" id="album">
      <div className="album-wrapper">
        <div className="section-head" data-aos="fade-up">
          <h3 className="text-gradient">STUDIO MOMENTS</h3>
          <p>A glimpse into the high-end creative process and life behind the console.</p>
        </div>

        <div className="album-grid">
          {images.map((image, index) => (
            <div
              className="album-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="album-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="album-overlay">
                  <span>View Capture</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Album;
