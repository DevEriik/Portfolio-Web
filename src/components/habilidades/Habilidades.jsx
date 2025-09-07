import React from "react";
import "./habilidades.css";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt, FaPhp, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode, FaBootstrap, FaGithubSquare } from "react-icons/fa";
const Habilidades = () => {
  return (
    <div className="container my-5" id="habilidades-nav">
      <hr data-aos="fade-down" />
      <h2 className="text-center my-5" data-aos="fade-right">
        Mis Habilidades
      </h2>
      <div className="row text-center">
        {/* Contenedor para la habilidad de HTML */}
        <div
          className="col-6 col-md-3 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <IoLogoHtml5 size={30} color="orange" />
          <p className="mt-2">HTML</p>
        </div>

        {/* Contenedor para la habilidad de CSS */}
        <div
          className="col-6 col-md-3 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaCss3Alt size={30} color="cornflowerblue" />
          <p className="mt-2">CSS</p>
        </div>

        {/* Contenedor para la habilidad de Javascript */}
        <div
          className="col-6 col-md-3 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <IoLogoJavascript size={30} color="yellow" />
          <p className="mt-2">JavaScript</p>
        </div>

        {/* Contenedor para la habilidad de React */}
        <div
          className="col-6 col-md-3 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaReact size={30} color="aqua" />
          <p className="mt-2">React</p>
        </div>

        {/* Contenedor para la habilidad de Node.js */}
        <div
          className="col-6 col-md-3 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaNode size={30} color="green" />
          <p className="mt-2">Node.js</p>
        </div>

        {/* Contenedor para la habilidad de PHP */}
        <div
          className="col-6 col-md-3 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaPhp size={30} color="navy" />
          <p className="mt-2">PHP</p>
        </div>

        {/* Contenedor para la habilidad de Bootstrap */}
        <div
          className="col-6 col-md-3 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaBootstrap size={30} color="rebeccapurple" />
          <p className="mt-2">Bootstrap</p>
        </div>

        {/* Contenedor para la habilidad de Github */}
        <div
          className="col-6 col-md-3 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaGithubSquare size={30} color="black" />
          <p className="mt-2">GitHub</p>
        </div>
      </div>
      <hr data-aos="fade-down" />
    </div>
  );
};

export default Habilidades;
