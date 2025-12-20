import logo from "./assets/logo.png";
import Latest from "./Latest.jsx";
import About from "./About.jsx";
import Trending from "./Trending.jsx";
import Video from "./Video.jsx";
import Biography from "./Biography.jsx";
import Contacts from "./Contacts.jsx";
import Album from "./Album.jsx";
import Collaborate from "./Collaborate.jsx";
import Parallax from "./Parallax.jsx";
import Projects from "./Projects.jsx";
function Body() {
  return (
    <>
      <Latest />
      <Trending />
      <Biography />
      <Video />
      <Collaborate />
      <Parallax />
      <Projects />
      <Album />
      <Contacts />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Chrishen Silva. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Body;
