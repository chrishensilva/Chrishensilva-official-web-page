import React, { useEffect, useRef } from "react";
import featured from "./assets/Featured.png";

function Featured() {
  const bgRef = useRef(null);

  /*useEffect(() => {
    const speed = 0.001; // smaller means background moves slower

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${-scrollY * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll(); // initial set

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);*/

  return (
    <div className="app" id="home">
      <div className="featured">
        <div
          ref={bgRef}
          className="featured-bg"
          style={{ backgroundImage: `url(${''})` }}
        />
        <div className="title-container">
          <h1 className="title">PEM HAMUWA</h1>
          <button className="listennow">Listen Now</button>
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
        </p>/*}

        {/* Extra height so page can scroll 
        <div style={{ height: "120vh" }} />
      </div>*/}
    </div>
  );
}

export default Featured;
