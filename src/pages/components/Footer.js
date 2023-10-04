import "./Footer.css";
import Resume from "../../assets/resume.pdf";

function Footer() {
  return (
    <footer>
      <h3>lets create together</h3>
      <div className="email">
        <a href="/contact">email me</a>
      </div>
      <div className="social-icons">
        <a href="https://github.com/mikaelagillett" target="/blank">
          <i className="bi bi-github"></i>
        </a>{" "}
        <a href={Resume} target="/blank" title="view resume Mikaela Gillett">
          <i className="bi bi-file-earmark-person"></i>
        </a>
        <a href="https://www.linkedin.com/in/mikaelagillett" target="/blank">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
