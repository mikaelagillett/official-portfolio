import Nav from "./components/Nav";
import profilePicture from "../assets/profilepicture.jpg";
import dogPhoto from "../assets/dog-photo.jpg";
import businessPhoto from "../assets/business-photo.jpg";
import "./About.css";
import "./AboutMediaQueries.css";

function About() {
  return (
    <div>
      <Nav />
      <div className="about">
        <div className="about-grid">
          <div>
            <h2>
              My name is Mikaela Gillett, I am a consumer focused web developer!
            </h2>
            <p>
              <strong>consumer focused:</strong>
              <br />
              focusing on the usability and emotional infliction of the consumer
            </p>
          </div>
          <div className="profile">
            <img src={profilePicture} alt="profile" />
            <span>
              <i className="bi bi-geo-alt-fill"></i> Ontario, Canada
            </span>
          </div>
        </div>
        <div className="about-paragraph">
          <p>
            new to the development community, I strive for web design the not
            only is easily usable but inflicts the right emotions to your ideal
            consumers and bring that to life with code. I work with you to hear
            your ideal consumer and we create a website that not only appeals to
            that consumer but invokes emotions that keeps them coming back.
          </p>
        </div>

        <section className="personal">
          <div className="heading-personal">
            <h3>lets get personal</h3>
            <hr />
          </div>
          <div className="personal-grid">
            <div className="photos">
              <img src={dogPhoto} alt="my cutie dog Suki" />
              <img src={businessPhoto} alt="a sweater from my business" />
            </div>
            <div className="links position-relative">
              <div className="personal-link-section">
                <p>get to know me personally :&#41;</p>
                <div className="personal-links">
                  <a
                    href="https://www.instagram.com/mikaela.gillett"
                    target="/blank"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/mikaela.gillett.7"
                    target="/blank"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
              <div className=" business-link-section">
                <div className="business-links">
                  <a
                    href="https://www.instagram.com/stitchwithmik"
                    target="/blank"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/stitchwithmik"
                    target="/blank"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
                <p>check out my side business</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
