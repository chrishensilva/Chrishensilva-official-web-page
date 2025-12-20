import Home from "./Home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Studio from "./Studio/Studio.jsx";
import { Helmet } from "react-helmet";
import { updateSEO } from "./seo";
{
  /*import { Analytics } from "@vercel/analytics/next";*/
}
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Replace with your GA4 Measurement ID
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-0CM6KTW38K`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-0CM6KTW38K");
  }, []);

  useEffect(() => {
    updateSEO({
      title: "Chrishen Silva | Welcome to official website",
      description:
        "Discover and Listen to latest releases and news from Chrishen Silva.",
      url: "https://chrishensilva.com",
      image: "/preview.jpg",
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // animate only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </>
  );
}

export default App;
