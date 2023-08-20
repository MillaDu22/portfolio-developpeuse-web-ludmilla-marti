import React from 'react';
import Banniere from "../../Banniere/index";
import Collapse from '../../Collapse/index';
import datasCollapse1 from '../../datas-collapse/data-collapse1.json';
import datasCollapse2 from '../../datas-collapse/data-collapse2.json';
import './a-propos-page.css';

function AProposPage() {
    const ficheCollapse1 = datasCollapse1.find ((datascollapse1) => datascollapse1.id);
    const projets = ficheCollapse1?.projets.map((projet, index) => {
        return <div className="nav" >
                    <ul className = "projets"  key= {index}>
                        <li className="projet">{projet}<a href={ficheCollapse1.liens} className="Lien-collapse">Voir le site</a></li>
                    </ul>
                </div>
    })
    const ficheCollapse2 = datasCollapse2.find ((datascollapse2) => datascollapse2.id);
    const certificats = ficheCollapse2?.certificats.map((certificat, index, lien) => {
        return <div className="nav" >
                    <ul className = "projets"  key= {index}>
                        <li className= "projet">{certificat}<a href= {ficheCollapse2.lien} className="Lien-collapse">Voir le certificat</a></li>
                    </ul>
                </div>
    })
    return (
        <div className= "AProposPage">
            <Banniere />
            <section className=" collapsesAbout">
                <div className = "box">
                    <div>
                        <Collapse
                            title = "Les projets de mon parcours intégratrice web"
                            content = {projets}/>
                    </div>
                </div>
                <div className = "box">
                    <div>
                        <Collapse
                            title = "Mes certifications Openclassrooms"
                            content1 = {certificats}/>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AProposPage
