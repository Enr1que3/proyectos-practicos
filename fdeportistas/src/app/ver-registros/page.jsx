'use client';

import {use, useEffect,useState} from "react";
import axios from "axios";
import Link from "next/link";

export default function VerResitros() {

    const [registros, setRegistros] = useState([]);
    const valores = [
        {nombre: "Juan", ap: "Pérez", am: "Gómez", especialidad: "Fútbol"},
        {nombre: "María", ap: "López", am: "Díaz", especialidad: "Natación"},
        {nombre: "Carlos", ap: "Sánchez", am: "Martínez", especialidad: "Atletismo"},
        {nombre: "Ana", ap: "García", am: "Rodríguez", especialidad: "Gimnasia"}
    ]

    const nombres = valores.map((item,index) => {
        console.log(item.nombre);
    })

    useEffect(() => {
        obtenerRegistros();
    }, []);

    const obtenerRegistros = async () => {
        const response = await axios.get("http://localhost:8080/v1/listar-todos");
        setRegistros(response.data);
        console.log(response.data);
        return response.data;
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
        <h1>Ver Registros</h1>
        <p>Aquí podrás ver los registros de los deportistas.</p>
        <table>
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Especialidad</th>
                </tr>
            </thead>
            <tbody>
                {registros.map((registro, index) => (
                    <tr key={index}>
                        <td style={{ padding: "0.8rem", borderBottom: "1px solid #ddd" }}>{registro.nombre}</td>
                        <td style={{ padding: "0.8rem", borderBottom: "1px solid #ddd" }}>{registro.ap}</td>
                        <td style={{ padding: "0.8rem", borderBottom: "1px solid #ddd" }}>{registro.am}</td>
                        <td style={{ padding: "0.8rem", borderBottom: "1px solid #ddd" }}>{registro.especialidad}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Link href="/registros">
            <button style={{ padding: "1rem", fontSize: "1.1rem" }}>Volver a Registros</button>
        </Link>
        
        </div>
    );

}