import "./Contact.css";
import { useState } from "react";
import Resume from "../assets/resume.pdf";

function Contact() {
  const email = "mikaelaihgillett@gmail.com";
  const [copySuccess, setCopySuccess] = useState(
    <i className="bi bi-clipboard-fill"></i>
  );
  function copyToClipboard(event) {
    event.preventDefault();
    navigator.clipboard.writeText(email);
    setCopySuccess(<i className="bi bi-clipboard-check-fill"></i>);
  }
  return (
    <div className="contact-page">
      <div className="contact">
        <h3>lets chat!</h3>

        <div className="email">
          <h4>{email}</h4>
        </div>
        <button onClick={copyToClipboard}>{copySuccess}</button>
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
      </div>
    </div>
  );
}

export default Contact;
