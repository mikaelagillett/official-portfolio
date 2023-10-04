import latestOne from "../../assets/dictionary-app-lg.png";
import latestTwo from "../../assets/weather-app-lg.png";
import latestThree from "../../assets/stephen-king-lg.png";
import { useState } from "react";
import "./ProjectHighlights.css";

function ProjectHighlights() {
  const [workLink, setWorkLink] = useState("d-none");
  function displayLink() {
    setWorkLink("");
  }
  function removeLink() {
    setWorkLink("d-none");
  }
  return (
    <section className="project-highlight">
      <h3>latest projects</h3>
      <div id="carouselProjects" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={latestOne}
              className="d-block w-100"
              alt="dictionary app thumbnail"
            />
          </div>
          <div className="carousel-item">
            <img
              src={latestTwo}
              className="d-block w-100"
              alt="weather app thumbnail"
            />
          </div>
          <div className="carousel-item">
            <img
              src={latestThree}
              className="d-block w-100"
              alt="stephen king app thumbnail"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselProjects"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselProjects"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <span onMouseEnter={displayLink} onMouseLeave={removeLink}>
        &lt;
        <a href="/projects" className={workLink}>
          see work
        </a>
        &gt;
      </span>
    </section>
  );
}
export default ProjectHighlights;
