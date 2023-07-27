import React from 'react';
import Banniere from "../../Banniere/index";
import Collapse from '../../Collapse/index';
import './a-propos-page.css';

function AProposPage() {
    return (
        <div className= "AProposPage">
            <Banniere />
            <section className=" collapsesAbout">
                <div className = "box">
                    <Collapse title='Les 12 projets' content="- Le site Riding Cities: Du code HTML est à développer et mise en forme des éléments comme sur la maquette
                    - Le site Booki:"/>
                </div>
                <div className = "box">
                    <Collapse title='Les certifications' content="La performance est l'indicateur de santé de votre site web, et sera optimisé." />
                </div>
            </section>
        </div>
    )
}
export default AProposPage
