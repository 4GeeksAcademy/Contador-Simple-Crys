import React from "react";

/**
 * ModosTema
 * Botón que alterna entre modo día y oscuro
 * EL ICONO QUE USA ES DE BOOTSTRAP
 */
export default function ModosTema({ modo, toggleModo }) {
  return (
    <button
      onClick={toggleModo}
      title="Cambiar modo"
      className={`control-btn ${modo === "dia" ? "btn-dia" : "btn-oscuro"}`}
    >
      <i className={`bi ${modo === "dia" ? "bi-sun-fill" : "bi-moon-fill"} fs-5`}></i>
    </button>
  );
}
