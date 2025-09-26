'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import DownloadDocument from "./PdfDownLodad";

import "./ver-registros.css";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function VerResitros() {
    // para obtener registros de la BD
    const [registros, setRegistros] = useState([]);

    // para eliminar registros de la BD
    const [respuesta, setRespuesta] = useState("");

    // Es el objeto que se envia para hacer un insert en la BDf
    const [nombre, setNombre] = useState("");
    const [ap, setAp] = useState("");
    const [am, setAm] = useState("");
    const [especialidad, setEspecialidad] = useState("");

    // para manerjar el modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // para manejar el modal de eliminar
    const [deleteOpen, setDeleteOpen] = useState(false);
    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);

    

    const [registroId, setRegistroId] = useState(null);

    useEffect(() => {
        obtenerRegistros();
    }, []);

    const obtenerRegistros = async () => {
        try {
            const response = await axios.get("http://localhost:8080/v1/listar-todos");
            setRegistros(response.data);
            console.log(response.data);
            return response.data;
        } catch (error) {
            alert(error === true ? "Error al obtener los registros" : error.message);
            
        }
    }


    const DtoRequest = {
        nombre,
        ap,
        am,
        especialidad
    }

    const actualizar = async (e) => {
        e.preventDefault();
        try {
            if (!registroId) return;
            const response = await axios.put(`http://localhost:8080/v1/actulizar-registro/${registroId}`, DtoRequest)
            setNombre("");
            setAp("");
            setAm("");
            setEspecialidad("");
            handleClose();
            console.log("registro ",response.data);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    }

    const eliminar = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/v1/borrar/${registroId}`);
            setRespuesta(response.data);
            handleDeleteClose();
            obtenerRegistros(); // Refresh the list after deletion
        } catch (error) {
            console.error("Error al eliminar el registro:", error);
        }
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };



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
            <table
                style={{
                    width: "100%",
                    maxWidth: "700px",
                    margin: "2rem auto",
                    borderCollapse: "collapse",
                    background: "rgba(255,255,255,0.10)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.13)",
                }}
            >
                <thead>
                    <tr style={{ background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)" }}>

                        <th style={{
                            padding: "1rem",
                            fontSize: "1.1rem",
                            color: "#fff",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            borderBottom: "2px solid #185a9d"
                        }}>Nombres</th>
                        <th style={{
                            padding: "1rem",
                            fontSize: "1.1rem",
                            color: "#fff",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            borderBottom: "2px solid #185a9d"
                        }}>Apellido Paterno</th>
                        <th style={{
                            padding: "1rem",
                            fontSize: "1.1rem",
                            color: "#fff",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            borderBottom: "2px solid #185a9d"
                        }}>Apellido Materno</th>
                        <th style={{
                            padding: "1rem",
                            fontSize: "1.1rem",
                            color: "#fff",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            borderBottom: "2px solid #185a9d"
                        }}>Especialidad</th>
                        <th colSpan={3} style={{
                            padding: "1rem",
                            fontSize: "1.1rem",
                            color: "#fff",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            borderBottom: "2px solid #185a9d",

                            textAlign: "center"
                        }}>Opciones</th>
                    </tr>
                </thead>
                {registros ? (
                    <tbody>
                    {registros.map((registro, index) => (
                        <tr
                            key={index}
                            style={{
                                background: index % 2 === 0 ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.15)",
                                color: "#222",
                            }}
                        >
                            <td style={{ padding: "0.9rem", borderBottom: "1px solid #b2ebf2", color: "#222" }}>{registro.nombre}</td>
                            <td style={{ padding: "0.9rem", borderBottom: "1px solid #b2ebf2", color: "#222" }}>{registro.ap}</td>
                            <td style={{ padding: "0.9rem", borderBottom: "1px solid #b2ebf2", color: "#222" }}>{registro.am}</td>
                            <td style={{ padding: "0.9rem", borderBottom: "1px solid #b2ebf2", color: "#222" }}>{registro.especialidad}</td>
                            <td style={{ padding: "0.9rem", borderBottom: "1px solid #b2ebf2", color: "#222" }}>
                                <Button onClick={() => { setRegistroId(registro.id); handleOpen() }}>

                                    <LuPencil style={{ fontSize: "1.5rem" }} />
                                </Button>
                            </td>
                            <td style={{ padding: "0.9rem", borderBottom: "1px solid #b2ebf2", color: "#222" }}>
                                <Button onClick={() => { setRegistroId(registro.id); handleDeleteOpen() }}>
                                    <FaRegTrashAlt style={{ fontSize: "1.5rem" }} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                ) : <p>no hay datos por mostrar</p>}
            </table>
            <div>

            </div>
            <Modal
                open={deleteOpen}
                onClose={handleDeleteClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Eliminar
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        ¿Estás seguro de que deseas eliminar este registro?
                        {registroId && (
                            registros.map((registro) => {
                                if (registro.id === registroId) {
                                    return (
                                        <div key={registro.id}>

                                            <p><strong>Nombre:</strong> {registro.nombre}</p>
                                            <p><strong>Apellido Paterno:</strong> {registro.ap}</p>
                                            <p><strong>Apellido Materno:</strong> {registro.am}</p>
                                            <p><strong>Especialidad:</strong> {registro.especialidad}</p>
                                        </div>
                                    );
                                }
                                return null;
                            })

                        )}
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => {
                                    eliminar();
                                    handleDeleteClose();
                                }}
                            >
                                Eliminar
                            </Button>
                            <Button variant="outlined" onClick={handleDeleteClose}>
                                Cancelar
                            </Button>

                        </div>
                    </Typography>
                </Box>

            </Modal>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">

                        Registro Actual
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {registroId && (
                            (() => {
                                const registro = registros.find(r => r.id === registroId); // Busca el objeto por id
                                return (
                                    <form onSubmit={actualizar} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                        <input
                                            type="text"
                                            placeholder={registro?.nombre || "Nombre"}
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
                                        />
                                        <input
                                            type="text"
                                            placeholder={registro?.ap || "Apellido Paterno"}
                                            value={ap}
                                            onChange={(e) => setAp(e.target.value)}
                                            style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
                                        />
                                        <input
                                            type="text"
                                            placeholder={registro?.am || "Apellido Materno"}
                                            value={am}
                                            onChange={(e) => setAm(e.target.value)}
                                            style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
                                        />
                                        <input
                                            type="text"
                                            placeholder={registro?.especialidad || "Especialidad"}
                                            value={especialidad}
                                            onChange={(e) => setEspecialidad(e.target.value)}
                                            style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
                                        />
                                        <button
                                            type="submit"
                                            style={{
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
                                        >
                                            Guardar Cambios
                                        </button>
                                    </form>
                                );
                            })()
                        )}

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                            
                           
                            <Button variant="outlined" onClick={handleClose}>
                                cerrar
                            </Button>

                        </div>

                    </Typography>
                </Box>

            </Modal>



            <div>
                <Link href="/registros" style={{ textDecoration: "none" }}>
                <button style={{
                    background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                    color: "#fff",
                    padding: "0.8rem 1.5rem",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}>Regresar
                </button>
            </Link>

            <DownloadDocument />
            </div>
            
        </div>
    );

}


