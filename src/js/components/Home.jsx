import React, { useState } from "react";
import SecondsCounter from "./SecondsCounter";
import Footer from "./Footer";
import ModosTema from "./ModosTema";

/**
 * Home
 CONTENEDOR PRINCIPAL PARA EL CONTADOR 
 */
const Home = () => {
  const [modo, setModo] = useState("dia");

  const toggleModo = () => setModo(modo === "dia" ? "oscuro" : "dia");

  return (
    <div className={`theme-${modo}`}>
      {/* Botón alternar tema */}
      <div className="d-flex justify-content-end p-3">
        <ModosTema modo={modo} toggleModo={toggleModo} />
      </div>

      <div className="container py-4 text-center">
        <h1>Cuenta & Reinicia</h1>
        <SecondsCounter modo={modo} />
      </div>

      <Footer modo={modo} />
    </div>
  );
};

export default Home;
