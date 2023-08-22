import React from 'react';
import Banniere from "../../Banniere/index";
import Collapse from '../../Collapse/index';
import datasCollapse1 from '../../datas-collapse/data-collapse1.json';
import datasCollapse2 from '../../datas-collapse/data-collapse2.json';
import './a-propos-page.css';

function AProposPage() {
    const ficheCollapse1 = datasCollapse1.find ((datascollapse1) => datascollapse1.id);
    const projets = ficheCollapse1?.projets.map((projet, index) => {

        return <div className="nav">
                    <ul className = "projets"  key = {index}>
                        <li className="projet" key= {projet}>{projet}<a href={ficheCollapse1.liens[index]} className="Lien-collapse" aria-label= "lien-site">Voir le site.</a></li>
                    </ul>
                </div>
    })
    const projetsCode = ficheCollapse1?.projetsCode.map((projetCode, index) => {
        return <div className="nav">
                    <ul className = "projets" key={index}>
                        <li className="projet" key= {projetCode}>{projetCode}<a href={ficheCollapse1.liensCode[index]} className="Lien-collapse" aria-label= "lien-code">Voir le code.</a></li>
                    </ul>
                </div>
    })
    const projetNoLink = ficheCollapse1?.projetNoLink.map((projetnolink, index) => {
        return <div className="nav">
                    <ul className = "projets" key={index}>
                        <li className="projet" key = {projetnolink}>{projetnolink}</li>
                    </ul>
                </div>
    })
    const ficheCollapse2 = datasCollapse2.find ((datascollapse2) => datascollapse2.id);
    const certificats = ficheCollapse2?.certificats.map((certificat, index) => {
        return <div className="nav" >
                    <ul className = "projets"  key= {index}>
                        <li className= "projet">{certificat}<a href= {ficheCollapse2.lien[index]} className="Lien-collapse" aria-label= "certificat">Certificat.</a></li>
                    </ul>
                </div>
    })
    const tousCertificats = ficheCollapse2?.tousCertificats.map((touscertificat, index) => {
        return <div className="nav" >
                    <ul className = "projets"  key= {index}>
                        <li className= "projet">{touscertificat}<a href= {ficheCollapse2.lienTous[index]} className="Lien-collapse" aria-label= "lien tous les certificats">Certificats/Linkedin.</a></li>
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
                            id = "1"
                            title = "Les projets de mon parcours intégratrice web"
                            content = {[...projets, ...projetsCode, ...projetNoLink]}/>
                    </div>
                </div>
                <div className = "box">
                    <div>
                        <Collapse
                            id="2"
                            title = "Mes certifications Openclassrooms"
                            content1 = {[...tousCertificats, ...certificats]}/>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AProposPage
