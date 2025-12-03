import a1 from "./assets/projects/pem hamuwa/p1.png";
import a2 from "./assets/projects/pem hamuwa/p2.png";
import a3 from "./assets/projects/pem hamuwa/p3.png";
import a4 from "./assets/projects/pem hamuwa/p4.png";
import a5 from "./assets/projects/pem hamuwa/p5.png";
import b1 from "./assets/projects/prehelikawak/p1.png";
import b2 from "./assets/projects/prehelikawak/p2.png";
import b3 from "./assets/projects/prehelikawak/p3.png";
import b4 from "./assets/projects/prehelikawak/p4.jpg";
import c1 from "./assets/projects/aleymal/p1.png";
import c2 from "./assets/projects/aleymal/p2.png";
import c3 from "./assets/projects/aleymal/p3.png";
import c4 from "./assets/projects/aleymal/p4.png";

import "./projects.css";
function Projects() {
  const project1 = [a1, a2, a3, a4, a5];
  const project2 = [b1, b2, b3, b4];
  const project3 = [c1, c2, c3, c4];

  return (
    <>
      <div className="Project-container" id="projects">
        <div className="project-head">
          <h2>PROJECTS</h2>
          <p>
            How they are made? Here are some of the project bones,steams and
            captures{" "}
          </p>
        </div>
        <div className="project-body">
          <h3>PREHELIKAWAK</h3>
          <div className="marquee">
            <div className="project-grid">
              {project2.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`project-${index}`}
                  loading="lazy"
                ></img>
              ))}
            </div>

            <div className="project-grid-duplicate">
              {project2.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`project-${index}`}
                  loading="lazy"
                ></img>
              ))}
            </div>
          </div>

          <h3>PEM HAMUWA</h3>
          <div className="marquee">
            <div className="project-grid" id="p2">
              {project1.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`project-${index}`}
                  loading="lazy"
                ></img>
              ))}
            </div>

            <div className="project-grid-duplicate" id="p2">
              {project1.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`project-${index}`}
                  loading="lazy"
                ></img>
              ))}
            </div>
          </div>
          <h3>AALEY MAL COVER</h3>
          <div className="marquee">
            <div className="project-grid">
              {project3.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`project-${index}`}
                  loading="lazy"
                ></img>
              ))}
            </div>

            <div className="project-grid-duplicate" id="pg2">
              {project3.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`project-${index}`}
                  loading="lazy"
                ></img>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
