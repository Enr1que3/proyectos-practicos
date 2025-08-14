'use client';

import Link from "next/link";
import "./home.css";


export default function HomeSwitcher() {



  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
        color: "#fff",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      {/* Título con sombra y animación */}
      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          textShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          animation: "fadeInDown 1s ease-out",
        }}
      >
        🏅 ¡Bienvenido al Gestor de Deportistas!
      </h1>

      {/* Subtítulo */}
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
          maxWidth: "600px",
          lineHeight: "1.5",
          opacity: 0.9,
        }}
      >
        Aquí podrás <b>registrar y administrar</b> a los deportistas del sistema
        de forma rápida y sencilla.
      </h2>

      {/* Botón con efecto hover */}
      <Link href="/registros">
        <button
          style={{
            padding: "1rem 2.5rem",
            fontSize: "1.2rem",
            background: "#fff",
            color: "#0072ff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#0072ff";
            e.target.style.color = "#fff";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#fff";
            e.target.style.color = "#0072ff";
            e.target.style.transform = "scale(1)";
          }}
        >
          ➕ Agregar Deportistas
        </button>
      </Link>

      {/* Animación CSS */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}