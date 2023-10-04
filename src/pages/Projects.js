import Nav from "./components/Nav";
import weatherLarge from "../assets/weather-app-lg.png";
import weatherSmall from "../assets/weather-app-sm.png";
import kingLarge from "../assets/stephen-king-lg.png";
import dictionaryLarge from "../assets/dictionary-app-lg.png";
import dictionarySmall from "../assets/dictionary-app-sm.png";
import clockLarge from "../assets/world-clock-lg.png";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <Nav />
      <div className="projects ">
        <div className="left-grid">
          <a
            href="https://react-weather-app-mikaela-gillett.netlify.app/"
            className="d-none d-md-block"
            target="/blank"
          >
            <img src={weatherSmall} alt="weather app thumbnail" />
          </a>
          <a
            href="https://react-weather-app-mikaela-gillett.netlify.app/"
            target="/blank"
          >
            <img src={weatherLarge} alt="weather app thumbnail" />
          </a>
        </div>
        <div className="">
          <a
            href="https://stephen-king-author-project.netlify.app/"
            target="/blank"
          >
            <img src={kingLarge} alt="stephen king project thumbnail" />
          </a>
        </div>
        <div className="right-grid">
          <a
            href="https://dictionary-mikaela-gillett.netlify.app/"
            target="/blank"
          >
            <img src={dictionaryLarge} alt="dictionary app thumbnail" />
          </a>
          <a
            href="https://dictionary-mikaela-gillett.netlify.app/"
            target="/blank"
            className="d-none d-md-block"
          >
            <img src={dictionarySmall} alt="dictionary app thumbnail" />
          </a>
        </div>
        <div>
          <a
            href="https://world-clock-project-mikaela-gillett.netlify.app/"
            target="/blank"
          >
            <img src={clockLarge} alt="world clock airlines thumbnail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
