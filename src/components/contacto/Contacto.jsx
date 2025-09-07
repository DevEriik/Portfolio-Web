import React, { useState } from "react";
import { Form, Row, Col, Button as BootstrapButton } from "react-bootstrap";
import Button from "@mui/material/Button";
import { FaWhatsapp } from "react-icons/fa";
import "./contacto.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [errorValidacion, setErrorValidacion] = useState(false);

  const enviarWhatsApp = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Valida que al menos el nombre y el mensaje no estén vacíos
    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      email.trim() === "" ||
      mensaje.trim() === ""
    ) {
      setErrorValidacion(true); // Cambia el estado a 'true' para mostrar el error
      return; // Detiene la función si la validación falla
    }

    setErrorValidacion(false);

    const numeroDeTelefono = "542984781034";
    const mensajeCompleto = `
¡Hola! He recibido un mensaje desde tu portafolio.
Nombre: ${nombre} ${apellido}
Email: ${email}
Mensaje: ${mensaje}
`;

    const mensajeCodificado = encodeURIComponent(mensajeCompleto);
    const urlWhatsApp = `https://wa.me/${numeroDeTelefono}?text=${mensajeCodificado}`;

    window.open(urlWhatsApp, "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    <div className="container my-5" id="contacto-nav">
      <h2 className="text-center mb-5">Contacto</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={enviarWhatsApp}>
            {" "}
            {/* El formulario ahora usa una función onSubmit simple */}
            <Form.Group
              className="mb-3"
              controlId="nombre"
              data-aos="fade-right"
            >
              <Form.Label>
                Nombre<span id="obligatorio-span">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="apellido"
              data-aos="fade-left"
            >
              <Form.Label>
                Apellido<span id="obligatorio-span">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="email"
              data-aos="fade-right"
            >
              <Form.Label>
                Correo Electrónico<span id="obligatorio-span">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="mensaje"
              data-aos="fade-left"
            >
              <Form.Label>
                Mensaje<span id="obligatorio-span">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escribe tu mensaje aquí"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </Form.Group>
            {/* Mensaje de error condicional */}
            {errorValidacion && (
              <p className="text-danger mb-3">
                Por favor, completa los campos para contactarte.
              </p>
            )}
            <Button
              type="submit"
              variant="contained"
              color="success"
              endIcon={<FaWhatsapp />}
              data-aos="fade-right"
            >
              Enviar Mensaje
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contacto;
