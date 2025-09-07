import React from "react";
import { Card } from "react-bootstrap";
import "./proyectos.css";

const Proyectos = () => {
  return (
    <div className="container my-5" id="proyectos-nav">
      <h2 className="text-center mb-5" data-aos="fade-left">
        Mis Proyectos
      </h2>
      <div className="row">
        {/*Proyecto 1 */}
        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
          <Card className="card-proyectos">
            <Card.Img
              variant="top"
              src="../../../assets/img/logo_blanco.png"
              style={{ height: "290px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Nombre Proyecto 1</Card.Title>
              <Card.Text>
                Descripción corta del proyecto 1. Habla sobre qué hace, las
                tecnologías que usaste y el propósito.
              </Card.Text>
              <a
                href="https://github.com/tu-usuario/proyecto1"
                className="btn btn-primary me-2"
              >
                Ver Código
              </a>
              <a
                href="https://tu-sitio-proyecto1.com"
                className="btn btn-secondary"
              >
                Ver Sitio
              </a>
            </Card.Body>
          </Card>
        </div>
        {/*Proyecto 2 */}
        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-down">
          <Card className="card-proyectos">
            <Card.Img
              variant="top"
              src="../../../assets/img/logo_blanco.png"
              style={{ height: "290px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Nombre Proyecto 2</Card.Title>
              <Card.Text>
                Descripción corta del proyecto 2. Habla sobre qué hace, las
                tecnologías que usaste y el propósito.
              </Card.Text>
              <a
                href="https://github.com/tu-usuario/proyecto1"
                className="btn btn-primary me-2"
              >
                Ver Código
              </a>
              <a
                href="https://tu-sitio-proyecto1.com"
                className="btn btn-secondary"
              >
                Ver Sitio
              </a>
            </Card.Body>
          </Card>
        </div>
        {/*Proyecto 3 */}
        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
          <Card className="card-proyectos">
            <Card.Img
              variant="top"
              src="../../../assets/img/logo_blanco.png"
              style={{ height: "290px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Nombre Proyecto 3</Card.Title>
              <Card.Text>
                Descripción corta del proyecto 3. Habla sobre qué hace, las
                tecnologías que usaste y el propósito.
              </Card.Text>
              <a
                href="https://github.com/tu-usuario/proyecto1"
                className="btn btn-primary me-2"
              >
                Ver Código
              </a>
              <a
                href="https://tu-sitio-proyecto1.com"
                className="btn btn-secondary"
              >
                Ver Sitio
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
      <hr data-aos="fade-down" />
    </div>
  );
};

export default Proyectos;
