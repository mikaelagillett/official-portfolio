import "./Home.css";

import ProjectHighlights from "./components/ProjectHighlights";
import SkillSet from "./components/SkillSet";
function Home() {
  return (
    <div className="home">
      <ProjectHighlights />
      <SkillSet />
    </div>
  );
}

export default Home;
