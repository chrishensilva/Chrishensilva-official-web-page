import React, { useEffect, useRef } from 'react';
import paraBg from "./assets/para.webp";

function Parallax() {
  const sectionRef = useRef(null);
  const requestRef = useRef();
  const scrollY = useRef(0);
  const currentY = useRef(0);

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const animate = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const target = (scrollY.current - sectionTop) * 0.4; // Fixed reasonable speed

      currentY.current = lerp(currentY.current, target, 0.5); // Ease factor (0.1 is smooth)
      sectionRef.current.style.setProperty('--scroll-y', `${currentY.current}px`);
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="parallax-section" ref={sectionRef}>
      <div
        className="parallax-bg-inner"
        style={{ backgroundImage: `url(${paraBg})` }}
      ></div>
      <div className="parallax-overlay"></div>
      <div className="parallax-container" style={{ transform: `translateY(calc(var(--scroll-y) * -0.1))` }}>
        <div className="parallax-content" data-aos="fade-up">
          <h2 className="parallax-title">WORLDWIDE STREAMING</h2>
          <p className="parallax-subtitle">Experience the sound of Chrishen Silva on your favorite platforms.</p>
          <div className="parallax-actions">
            <a
              href="https://open.spotify.com/artist/5XShvesrxeUmkwuCN4Lm6P?si=hWyskldBSJ6UF-awS6gkYA"
              target="_blank"
              rel="noopener noreferrer"
              className="parallax-btn spotify"
            >
              LISTEN ON SPOTIFY
            </a>
            <a
              href="https://music.apple.com/sg/artist/chrishen-silva/1549622928"
              target="_blank"
              rel="noopener noreferrer"
              className="parallax-btn apple"
            >
              APPLE MUSIC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parallax;
