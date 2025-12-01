import React, { useState, useEffect, useRef } from "react";
import ControlButton from "./ControlButton";

/**
 * SecondsCounter
 * Contador digital futurista
 */
export default function SecondsCounter({ modo }) {
  const [numeroActual, setNumeroActual] = useState(0);
  const [iconoArena, setIconoArena] = useState("top");
  const [corriendo, setCorriendo] = useState(true);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [numeroAlerta, setNumeroAlerta] = useState(null);
  const [numeroInput, setNumeroInput] = useState("");
  const [cuentaRegresiva, setCuentaRegresiva] = useState(false);

  const timeoutAlerta = useRef(null);

  const pausar = () => setCorriendo(false);
  const resumir = () => setCorriendo(true);
  const reiniciar = () => {
    setNumeroActual(0);
    setMostrarAlerta(false);
    setCuentaRegresiva(false);
    setNumeroAlerta(null);
  };

  const iniciarCuenta = () => {
    const valor = parseInt(numeroInput);
    if (!isNaN(valor) && valor >= 0 && valor <= 999999) {
      setNumeroActual(valor);
      setCuentaRegresiva(true);
      setCorriendo(true);
      setMostrarAlerta(false);
      setNumeroAlerta(0); // alerta al llegar a cero
    } else {
      alert("Ingrese un número válido entre 0 y 999999");
    }
  };

  // Contador
  useEffect(() => {
    if (!corriendo) return;
    const idIntervalo = setInterval(() => {
      setNumeroActual((valorAnterior) => {
        let nuevoValor;
        if (cuentaRegresiva) {
          nuevoValor = valorAnterior - 1;
          if (nuevoValor <= 0) {
            nuevoValor = 0;
            setMostrarAlerta(true);
            clearTimeout(timeoutAlerta.current);
            timeoutAlerta.current = setTimeout(() => setMostrarAlerta(false), 4000);
          }
        } else {
          nuevoValor = valorAnterior + 1;
          if (numeroAlerta !== null && nuevoValor === numeroAlerta) {
            setMostrarAlerta(true);
            clearTimeout(timeoutAlerta.current);
            timeoutAlerta.current = setTimeout(() => setMostrarAlerta(false), 4000);
          }
        }
        return nuevoValor;
      });
    }, 1000);

    return () => {
      clearInterval(idIntervalo);
      clearTimeout(timeoutAlerta.current);
    };
  }, [corriendo, cuentaRegresiva, numeroAlerta]);

  // Animación reloj de arena
  useEffect(() => {
    const fases = ["top", "split", "bottom"];
    const idIcono = setInterval(() => {
      setIconoArena((valorAnterior) => {
        const indice = fases.indexOf(valorAnterior);
        return fases[(indice + 1) % fases.length];
      });
    }, 500);
    return () => clearInterval(idIcono);
  }, []);

  const numeroFormateado = String(numeroActual).padStart(6, "0");

  return (
    <div className="p-3 border rounded text-center w-100">
      {/* INPUT */}
      <div className="mb-3 d-flex justify-content-center gap-2 flex-wrap">
        <input
          type="number"
          className="form-control"
          style={{
            width: "120px",
            textAlign: "center",
            fontWeight: "bold",
          }}
          placeholder="Número"
          value={numeroInput}
          onChange={(e) => setNumeroInput(e.target.value)}
        />
        <ControlButton
          iconClass="bi-play-fill"
          texto="Iniciar"
          onClick={iniciarCuenta}
          modo={modo}
        />
      </div>

      {/* RELOJ DE ARENA */}
      <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
        <i className={`bi bi-hourglass-${iconoArena} reloj-arena fs-1`}></i>
      </div>

      {/* CONTADOR DIGITAL */}
      <div className="d-flex justify-content-center gap-2 flex-wrap mb-3">
        {numeroFormateado.split("").map((digito, index) => (
          <div key={index} className="digit-box">{digito}</div>
        ))}
      </div>

      {/* BOTONES DE CONTROL */}
      <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap">
        <ControlButton iconClass="bi-play-fill" texto="" onClick={resumir} modo={modo} />
        <ControlButton iconClass="bi-pause-fill" texto="" onClick={pausar} modo={modo} />
        <ControlButton iconClass="bi-arrow-counterclockwise" texto="" onClick={reiniciar} modo={modo} />
      </div>

      {/* ALERTA TOAST CENTRADA */}
      {mostrarAlerta && (
        <div className={`toast show text-center px-4 py-3`} style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1100,
          fontSize: "1.5rem",
          borderRadius: "15px",
          backgroundColor: modo === "dia" ? "#4fefc9ff" : "#0a0a1f",
          color: modo === "dia" ? "#0ff" : "#00ffea",
          boxShadow: `0 0 20px ${modo === "dia" ? "#0ff" : "#00ffea"}, 0 0 40px ${modo === "dia" ? "#ff0" : "#ff0090"}`,
        }}>
          <div>¡Se Acabo el TIEMPO! Actualiza La Pagina.</div>
          <button
            type="button"
            className="btn-close btn-close-white mt-2"
            onClick={() => setMostrarAlerta(false)}
          ></button>
        </div>
      )}
    </div>
  );
}
