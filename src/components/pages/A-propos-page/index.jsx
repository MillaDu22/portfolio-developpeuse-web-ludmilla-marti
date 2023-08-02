import React from 'react';
import Banniere from "../../Banniere/index";
import Collapse from '../../Collapse/index';
import Collapses from '../../Collapse/Collapses';
import './a-propos-page.css';

function AProposPage() {
    return (
        <div className= "AProposPage">
            <Banniere />
            <section className=" collapsesAbout">
                <div className = "box">
                    <Collapse />
                    <Collapses />
                </div>
            </section>
        </div>
    )
}
export default AProposPage
