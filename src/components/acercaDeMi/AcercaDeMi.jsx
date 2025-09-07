import React from "react";
import "./acercaDeMi.css";

const AcercaDeMi = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {" "}
        {/* Corregido: 'align' */}
        {/* Primera columna para la imagen (4 de 12 columnas en pantallas medianas o más grandes) */}
        <div
          className="col-md-4 text-center mb-4 mb-md-0"
          data-aos="fade-down-right"
        >
          {" "}
          {/* ¡Esta es la columna para la foto! */}
          <img
            src="../../../assets/img/perfil.jpeg"
            alt="Foto Perfil"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "200px", objectFit: "cover" }} // Añadí objectFit para el círculo perfecto
          />
        </div>
        {/* Segunda columna para el texto (8 de 12 columnas en pantallas medianas o más grandes) */}
        <div className="col-md-8" data-aos="fade-up-left">
          {" "}
          {/* ¡Esta es la columna para el texto! */}
          <h2 className="mb-3">Acerca de Mí</h2>
          <p>
            ¡Hola! Soy Erick, un apasionado estudiante de desarrollo web. Mi
            curiosidad por la tecnología y la creación de sitios web me ha
            llevado a aprender de forma autodidacta y a través de proyectos
            personales.
          </p>
          <p>
            En mi proceso de aprendizaje, me he familiarizado con lenguajes y
            herramientas clave como HTML, CSS y JavaScript. Estoy construyendo
            mi base en el desarrollo front-end con React, una herramienta que me
            fascina por la forma en que permite crear interfaces interactivas y
            dinámicas. También he explorado el desarrollo back-end con PHP para
            entender cómo funcionan los sitios web por completo.
          </p>
          <p>
            Estoy en una fase de crecimiento constante, siempre buscando nuevos
            desafíos que me permitan seguir aprendiendo y mejorando mis
            habilidades como desarrollador.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcercaDeMi;
