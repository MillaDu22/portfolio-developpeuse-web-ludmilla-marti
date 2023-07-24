import React from 'react';
import "./gallerie.css";
import Filtre from "../../components/Filtre/index";
import Card from "../Card/index";

function Gallerie () {
    return (

        <section className="gallery">
        <p className="projets">Ma gallerie</p>
        <Filtre />
        <div className="galleryCard">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </section>
    )
}
export default Gallerie;