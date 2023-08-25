import React from 'react';
import "./OpenPdf.css";
import A4 from "../../assets/Cv.webp";

function OpenPdf () {
    const openWebP = () => {
        window.open(A4, '_blank');
    };
    return (
        <div className="container-buttons">
            <button className="pdf-button" onClick={openWebP}>Télécharger</button>
        </div>
    );
}
export default OpenPdf;


