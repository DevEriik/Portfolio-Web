import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AcercaDeMi from "./components/acercaDeMi/AcercaDeMi";
import Habilidades from "./components/habilidades/Habilidades";
import Proyectos from "./components/proyectos/Proyectos";
import Contacto from "./components/contacto/Contacto";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <AcercaDeMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
