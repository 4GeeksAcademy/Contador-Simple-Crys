import React from "react";

/**
 * ModosTema
 * Botón que alterna entre modo día y oscuro
 * Usa Bootstrap Icons
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
