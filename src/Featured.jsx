import React, { useEffect, useRef } from "react";
import featured from "./assets/Featured.webp";

function Featured() {
  const bgRef = useRef(null);

  useEffect(() => {
    const speed = 0.3; // smaller means background moves slower

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${-scrollY * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll(); // initial set

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app" id="home">
      <div className="featured">
        <div
          ref={bgRef}
          alt="Image of Premiye"
          loading="lazy"
          className="featured-bg"
          style={{ backgroundImage: `url(${featured})` }}
        />
        <div className="title-container">
          <h1 className="title" data-aos="fade-up">
            PREMIYE
          </h1>
          <a
            href="https://youtu.be/4qL5DD5TJxo?si=Nu4VOjN8n3DZkhC4"
            target="_blank"
          >
            <button
              className="listennow"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Listen Now
            </button>
          </a>
        </div>
      </div>

      {/*<div className="content">
        <h2>About This Site</h2>
        <p>
          This is a simple website made with React and pure CSS. The hero image
          scrolls slower than the content, creating a parallax effect.
        </p>

        <h2>More Content</h2>
        <p>
          You can add any content here—articles, images, or sections. The text
          scrolls over the slower-moving background for a modern, clean feel.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          accumsan vel orci vel gravida. Sed faucibus sem et libero suscipit,
          sit amet fringilla turpis viverra.
        </p>

        <div style={{ height: "120vh" }} />*/}
    </div>
  );
}

export default Featured;
