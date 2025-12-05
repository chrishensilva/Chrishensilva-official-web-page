import Home from "./Home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { updateSEO } from "./seo";
import { inject } from "@vercel/analytics";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    inject();
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
      <Home />
    </>
  );
}

export default App;
