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
        <div className="row">
          <div className="col-lg-3 small">
            <a
              href="https://react-weather-app-mikaela-gillett.netlify.app/"
              className="d-none d-lg-block"
              target="/blank"
            >
              <img src={weatherSmall} alt="weather app thumbnail" />
            </a>
          </div>
          <div className="col-lg-9">
            <div className="project-img-wrapper">
              <a
                href="https://react-weather-app-mikaela-gillett.netlify.app/"
                target="/blank"
              >
                <img src={weatherLarge} alt="weather app thumbnail" />
                <div className="project-img-overlay">
                  <div className="project-title">
                    <h3>weather app</h3>
                  </div>
                  <div className="project-description">
                    <h4>
                      My first react application, features real time weather
                      data, moment time display, and unit temperature change for
                      the whole site, with an expandable forecast section! It
                      also includes icon changes that change with the weather
                      description as well as background changes to fit the
                      weather!
                    </h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="md-project-title">
              <div className="project-title-md">
                <h3>weather app</h3>
              </div>
              <div className="project-description-md">
                <h4>
                  My first react application, features real time weather data,
                  moment time display, and unit temperature change for the whole
                  site, with an expandable forecast section! It also includes
                  icon changes that change with the weather description as well
                  as background changes to fit the weather!
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="project-img-wrapper">
            <a
              href="https://stephen-king-author-project.netlify.app/"
              target="/blank"
            >
              <img src={kingLarge} alt="stephen king project thumbnail" />

              <div className="project-img-overlay">
                <div className="project-title">
                  <h3>author project</h3>
                </div>
                <div className="project-description">
                  <h4>
                    my first responsive application, using columns and bootstrap
                    cards to make the website look amazing on all devices! as
                    well introducing some embeds directly in the code!
                  </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="md-project-title">
            <div className="project-title-md">
              <h3>author project</h3>
            </div>
            <div className="project-description-md">
              <h4>
                my first responsive application, using columns and bootstrap
                cards to make the website look amazing on all devices! as well
                introducing some embeds directly in the code!
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="project-img-wrapper">
              <a
                href="https://dictionary-mikaela-gillett.netlify.app/"
                target="/blank"
              >
                <img src={dictionaryLarge} alt="dictionary app thumbnail" />

                <div className="project-img-overlay">
                  <div className="project-title">
                    <h3>dictionary app</h3>
                  </div>
                  <div className="project-description">
                    <h4>
                      react application using a dictionary api and photo api,
                      search any word and get all the definitions plus some
                      photos! did i mention it's also responsive?
                    </h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="md-project-title">
              <div className="project-title-md">
                <h3>dictionary app</h3>
              </div>
              <div className="project-description-md">
                <h4>
                  react application using a dictionary api and photo api, search
                  any word and get all the definitions plus some photos! did i
                  mention it's also responsive?
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 small">
            <a
              href="https://dictionary-mikaela-gillett.netlify.app/"
              target="/blank"
              className="d-none d-lg-block"
            >
              <img src={dictionarySmall} alt="dictionary app thumbnail" />
            </a>
          </div>
        </div>
        <div>
          <div className="project-img-wrapper">
            <a
              href="https://world-clock-project-mikaela-gillett.netlify.app/"
              target="/blank"
            >
              <img src={clockLarge} alt="world clock airlines thumbnail" />

              <div className="project-img-overlay">
                <div className="project-title">
                  <h3>world clock app</h3>
                </div>
                <div className="project-description">
                  <h4>
                    a fun clock application! introducing moment js into my code!
                    I had alot of fun making this clock application a little
                    more fun adding a cute little ticket booking system to take
                    you to different destinations even in the future!
                  </h4>
                </div>
              </div>
            </a>
          </div>
          <div className="md-project-title">
            <div className="project-title-md">
              <h3>world clock app</h3>
            </div>
            <div className="project-description-md">
              <h4>
                a fun clock application! introducing moment js into my code! I
                had alot of fun making this clock application a little more fun
                adding a cute little ticket booking system to take you to
                different destinations even in the future!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
