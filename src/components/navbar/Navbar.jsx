import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades-nav">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos-nav">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto-nav">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
