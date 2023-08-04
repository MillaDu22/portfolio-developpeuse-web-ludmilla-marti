import React from 'react';
import "./gallerie.css";
import Card from "../Card/index";
import datasProjets from '../Datas-projets/datas-projets.json';

function Gallerie () {
    return (
        <section className="gallery">
            <p className="projets">Ma gallerie</p>
                <div className="galleryCard">{datasProjets.map(datasProjet => {
                    return (
                        <Card 
                            key= { datasProjet.id }
                            id = { datasProjet.id } 
                            title = { datasProjet.title }
                            cover = { datasProjet.cover } 
                            alt = { datasProjet.alt }
                            informations = { datasProjet.informations } />
                        )
                    })}
                </div>
        </section>
    )
}
export default Gallerie;





