'use client';

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import "./home.css";
import { useRouter } from 'next/navigation'


export default function HomeSwitcher() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const registro = useRouter();
  const [validar, setValidar] = useState("");

  const request = {
    username,
    password
  }

  const login = async () => {
    const respuesta = await axios.post("http://localhost:8080/v1/login", request);
    console.log(respuesta.data);
  }

  const validarCampos = () => {

    if ((username.trim() === "" || username === 'admin') || password.trim() === "") {
      setValidar(`el usuario y/o la contrasena son obligatorios`);
      setUsername("");
      setPassword("");
      alert(validar);

    } else {

      registro.push('/inicio');
      login();
    }
  }


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
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h1 style={{ marginBottom: "1.5rem", fontSize: "2rem" }}>Iniciar Sesión</h1
      >
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"
          style={{
            padding: "0.8rem", borderRadius: "8px", border: "none", fontSize: "1rem", width: "250px",
            textAlign: "center", color: "#fff", backgroundColor: "#ffffff20", border: "1px solid #ffffff50", outline: "none"

          }}
        />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
          style={{
            padding: "0.8rem", borderRadius: "8px", border: "none", fontSize: "1rem", width: "250px", marginTop: "1rem",
            textAlign: "center", color: "#fff", backgroundColor: "#ffffff20", border: "1px solid #ffffff50", outline: "none"

          }}
        />
        <br />

        <button
          onClick={validarCampos}
          style={{
            marginTop: "1rem",
            background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
            color: "#fff",
            padding: "0.8rem 1.5rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
          type="button"
        >
          LogIn
        </button>
      </div>
    </div>
  );
}