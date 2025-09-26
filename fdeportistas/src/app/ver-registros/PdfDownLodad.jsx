'use client'
import axios from "axios"
import { useState } from "react";

export default function DownloadDocument() {

    // para PDF
    const [pdf,setPdf] = useState(false);
    const [pdfData, setPdfData] = useState("");

    // para WORD
    const [word,setWord] = useState(false);
    const [wordData, setWordData] = useState("");

    const handlePDFDownload = async() => {
        const resposne = await axios.get("http://localhost:8080/v1/generar-documento");
        setPdf(true);
        setPdfData(resposne.data);
        console.log("valor de tipo ",pdf);
        console.log(pdfData);
    }

    const handleWORDDownload = async() => {
        const resposne = await axios.get("http://localhost:8080/v1/generar-word"); 
        setWord(true);
        setWordData(resposne.data);
        console.log("valor de tipo ",word);
        console.log(wordData);
    }

    const styleButtonPdf ={
        padding: "12px 20px",
        background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer", 
        fontSize: "16px",
        marginLeft: "10px",
        transition: "background 0.3s ease",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

    }

    const styleButtonWord ={
        padding: "12px 20px",
        background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer", 
        fontSize: "16px",
        marginLeft: "10px",
        transition: "background 0.3s ease",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }

    return (
        <>
            <button onClick={handlePDFDownload} style={styleButtonPdf}>Descargar PDF</button>

            <button onClick={handleWORDDownload} style={styleButtonWord}>Descargar WORD</button>
        </>
    );
}