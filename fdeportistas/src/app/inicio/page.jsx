'use client';
import Link from "next/link";
import "./inicio.css";

export default function Inicio() {


    return <>
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
            <div
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    padding: "2.5rem 3rem",
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    textAlign: "center",
                    width: "100%",
                    maxWidth: "500px",
                }}
            >
                <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
                    Bienvenido a la Plataforma de Deportistas
                </h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                    Gestiona y registra información de deportistas de manera eficiente y segura.
                </p>
                <Link href="/registros" style={{ color: "#fff", textDecoration: "none", textDecoration: "none" }}>
                    <button
                        style={{
                            background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                            color: "#fff",
                            padding: "0.8rem 1.5rem",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            transition: "background 0.3s ease",
                        }}
                    >
                        Ir a Registros
                    </button>
                </Link>
            </div>
        </div> 
    </>
}