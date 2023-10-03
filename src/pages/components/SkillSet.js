import "./SkillSet.css";

import reactIcon from "../../assets/react-icon.png";
import responsiveIcon from "../../assets/responsive-icon.png";
import apiIcon from "../../assets/api-icon.png";

function SkillSet() {
  return (
    <section className="skill-set">
      <h3>skill set</h3>
      <div className="skill-icons">
        <i class="bi bi-filetype-css"></i>
        <i class="bi bi-filetype-html"></i>
        <i class="bi bi-filetype-js"></i>
        <i class="bi bi-filetype-jsx"></i>
        <i class="bi bi-tablet"></i>
        <i class="bi bi-bootstrap"></i>
        <i class="bi bi-cloud-download"></i>
        <i class="bi bi-palette2"></i>
      </div>
    </section>
  );
}

export default SkillSet;
