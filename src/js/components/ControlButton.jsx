import React from "react";

/**
 * ControlButton
 * Botón con icono universal y texto, animado y adaptable al tema
 * Props:
 * - iconClass: clase del icono de Bootstrap 
 * - texto: texto opcional
 * - onClick: función al hacer click
 * - modo: "dia" o "oscuro"
 */
export default function ControlButton({ iconClass, texto, onClick, modo }) {
  return (
    <button
      className={`control-btn ${modo === "dia" ? "btn-dia" : "btn-oscuro"}`}
      onClick={onClick}
      title={texto}
    >
      <i className={`bi ${iconClass} fs-5`}></i>
      {texto && <span className="ms-2">{texto}</span>}
    </button>
  );
}
