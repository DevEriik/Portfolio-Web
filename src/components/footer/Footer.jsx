import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="d-flex justify-content-center gap-2">
        <a href="http://instagram.com/eriik_gon25" target="blank_">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="https://github.com/DevEriik" target="blank_">
          <i class="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/deveriick/" target="_blank">
          <i class="bi bi-linkedin"></i>
        </a>
      </div>

      <div className="d-flex justify-content-center">
        <p className="fst-italic text-secondary">
          © Todos los derechos reservados | {""}
          <a href="https://github.com/DevEriik" target="blank_">
            Erick
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
