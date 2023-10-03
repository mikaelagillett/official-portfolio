import logo from "../assets/logo.png";

import "./Home.css";
import HomeNav from "./HomeNav";

import ProjectHighlights from "./components/ProjectHighlights";
import SkillSet from "./components/SkillSet";
function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="main">
          <img className="logo" src={logo} alt="my logo images" />
          <h1>
            Welcome. <br /> I'm Mikaela, <br className="d-sm-none" />a Front end
            developer based in Canada
          </h1>
        </div>
        <div>
          <HomeNav />
        </div>
      </div>
      <ProjectHighlights />
      <SkillSet />
    </div>
  );
}

export default Home;
