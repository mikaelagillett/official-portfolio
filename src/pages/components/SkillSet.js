import "./SkillSet.css";

function SkillSet() {
  return (
    <section className="skill-set">
      <h3>skill set</h3>
      <div className="skill-icons">
        <div className="d-flex flex-column">
          <i className="bi bi-filetype-css"></i>
          <span>css styling language</span>
        </div>
        <div className="d-flex flex-column">
          <i className="bi bi-filetype-html"></i>
          <span>html language</span>
        </div>
        <div className="d-flex flex-column">
          <i className="bi bi-filetype-js"></i>
          <span>java script language</span>
        </div>
        <div className="d-flex flex-column">
          <i className="bi bi-filetype-jsx"></i>
          <span>react development</span>
        </div>
        <div className="d-flex flex-column">
          <i className="bi bi-tablet"></i>
          <span>responsive development</span>
        </div>
        <div className="d-flex flex-column">
          <i className="bi bi-bootstrap"></i>
          <span>bootstrap framework</span>
        </div>
        <div className="d-flex flex-column">
          <i className="bi bi-cloud-download"></i>
          <span>api integration</span>
        </div>
        <div className="d-flex flex-column">
          <i className="bi bi-palette2"></i>
          <span>colour theory</span>
        </div>
      </div>
    </section>
  );
}

export default SkillSet;
