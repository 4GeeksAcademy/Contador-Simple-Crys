import React from "react";

/**
 * Footer
 * Footer personal adaptable al tema
 */
export default function Footer({ modo }) {
  return (
    <footer
      className={`footer py-3 text-center`}
      style={{
        color: modo === "dia" ? "#0ff" : "#00ffea",
        textShadow: "0 0 5px #0ff, 0 0 10px #0ff",
      }}
    >
      © 2025 Crystian Ariel Carmona Trujillo — created with ❤️ & <code>code</code>.
    </footer>
  );
}
