import Home from './Home.jsx';
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,     // animation duration in ms
      once: true,        // animate only once
      easing: 'ease-in-out',
    });
  }, []);

  
  return(
    
    <>
    
      <Home/>
    </>
    
  );
  
}

export default App
