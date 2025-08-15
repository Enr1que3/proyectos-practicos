'use client';
import { useState } from "react";
import axios from "axios";
import "./registros.css";
import Link from "next/link";

function Registros() {

    const [nombre, setNombre] = useState("");
    const [ap, setAp] = useState("");
    const [am, setAm] = useState("");
    const [especialidad, setEspecialidad] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);



    const DtoRequest = {
        nombre,
        ap,
        am,
        especialidad
    }

    const sendData = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMensaje("");
        try {
            const response = await axios.post("http://localhost:8080/v1/insertar-registros", DtoRequest);
            setMensaje("¡Deportista registrado exitosamente!");
            console.log(response.data);
            // Limpia los campos si quieres:
            setNombre("");
            setAp("");
            setAm("");
            setEspecialidad("");
        } catch (error) {
            setMensaje("Ocurrió un error al registrar. Intenta de nuevo.");
        }
        setLoading(false);
    }

    const thStyle = {
        padding: "1rem",
        fontSize: "1rem",
        textTransform: "uppercase",
    };

    const tdStyle = {
        padding: "0.8rem",
        borderBottom: "1px solid #ddd",
    };


    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(120deg, #43cea2 0%, #185a9d 100%)",
                color: "#fff",
                fontFamily: "Segoe UI, Arial, sans-serif",
                padding: "2rem",
            }}
        >
            <div
                style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "2.5rem 3rem",
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    textAlign: "center",
                    width: "100%",
                    maxWidth: "500px",
                }}
            >
                <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
                    Agregar Deportista
                </h1>
                <form onSubmit={sendData} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        style={{
                            padding: "0.8rem",
                            borderRadius: "8px",
                            border: "none",
                            fontSize: "1rem",
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Apellido Paterno"
                        value={ap}
                        onChange={(e) => setAp(e.target.value)}
                        required
                        style={{
                            padding: "0.8rem",
                            borderRadius: "8px",
                            border: "none",
                            fontSize: "1rem",
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Apellido Materno"
                        value={am}
                        onChange={(e) => setAm(e.target.value)}
                        required
                        style={{
                            padding: "0.8rem",
                            borderRadius: "8px",
                            border: "none",
                            fontSize: "1rem",
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Especialidad"
                        value={especialidad}
                        onChange={(e) => setEspecialidad(e.target.value)}
                        required
                        style={{
                            padding: "0.8rem",
                            borderRadius: "8px",
                            border: "none",
                            fontSize: "1rem",
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            padding: "1rem",
                            fontSize: "1.1rem",
                            background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            marginTop: "1rem",
                            transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                        }}
                        onMouseOver={e => {
                            e.target.style.transform = "scale(1.05)";
                            e.target.style.background = "#185a9d";
                        }}
                        onMouseOut={e => {
                            e.target.style.transform = "scale(1)";
                            e.target.style.background = "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)";
                        }}
                    >
                        Registrar
                    </button>
                </form>
                {mensaje && (
                    <div style={{ marginTop: "1rem", fontWeight: "bold" }}>{mensaje}</div>
                )}
                <Link href="/" style={{ color: "#fff", textDecoration: "none", textDecoration: "none" }}>

                    <button
                        style={{
                            marginTop: "1.5rem",
                            marginRight: "1.5rem",
                            padding: "0.9rem 2rem",
                            fontSize: "1.1rem",
                            background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                            transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                        }}
                        onMouseOver={e => {
                            e.target.style.transform = "scale(1.05)";
                            e.target.style.background = "#185a9d";
                        }}
                        onMouseOut={e => {
                            e.target.style.transform = "scale(1)";
                            e.target.style.background = "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)";
                        }}
                    >Regresar
                    </button>
                </Link>

                <Link href="/ver-registros" style={{ color: "#fff", textDecoration: "none" }}>
                    <button
                        style={{
                            marginTop: "1.5rem",
                            padding: "0.9rem 2rem",
                            fontSize: "1.1rem",
                            background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                            transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                        }}
                        onMouseOver={e => {
                            e.target.style.transform = "scale(1.05)";
                            e.target.style.background = "#185a9d";
                        }}
                        onMouseOut={e => {
                            e.target.style.transform = "scale(1)";
                            e.target.style.background = "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)";
                        }}
                    >Ver registros
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Registros;