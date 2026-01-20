import Featured from "./Featured.jsx";
import Body from "./Body.jsx";

function Home() {
  return (
    <>
      <div className="navigation" data-aos="fade-down">
        <h2 className="nav-title">Chrishen</h2>
        <div className="nav-menu">
          <ul className="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#release">Releases</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#bio">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <Featured />
      <Body />
    </>
  );
}

export default Home;
