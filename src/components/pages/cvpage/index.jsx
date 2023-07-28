import React from 'react';
import "./cvpage.css";
import Tof from "../../../assets/img/FB_IMG_1690363536869.jpg";


const CvPage =() => {
    return (
        <div className="page">
            <div className= "tour-cv">
                <span className="top-cv">
                    <span className ="tour-img">
                        <img src={Tof} alt="tof profil" className="img-profil"/>
                    </span>
                    <span className="en-tete">
                        <p className="name">Ludmilla MARTI</p>
                        <p className ="age">46 ans</p>
                        <p className ="fonction">Développeuse Web</p>
                    </span>
                </span>
            <div className="aside">
                <div className="titre-aside">coordonnées</div>
                <div className="adress-rue">14, rue Feunteun Ar C'hlan</div>
                <div className="adress-ville">22720 plésidy</div>
                <div className ="tel">06 58 06 28 00</div>
                <div className="email">marti.ludmilla@orange.fr</div>
                <span className ="separation"></span>
                <div className="titre-aside">compétences</div>
                <div className="competences">- Html5/css3/JS</div>
                <div className="competences">- Sass</div>
                <div className ="competences">- NodeJS</div>
                <div className="competences">- React</div>
                <div className="competences">- PhotoShop</div>
                <div className="competences">- LightRoom</div>
                <div className="competences">- Word/excel/powerPoint</div>
                <span className ="separation"></span>
                <div className="titre-aside">langues</div>
                <div className="langues">Français " courant "</div>
                <div className="langues">Anglais " intermédiaire "</div>
            </div>
            <div className= "section-cv">
                <h2 className="h2-profil">PROFIL</h2>
                <p className="p-profile">Passionnée par le milieu de l'informatique et particulièrement
                    sensible au langage JavaScript et au web-design, j'ai décidé de me reconvertir dans le développement web
                    via OpenClassRooms après 23 ans passés dans le secteur de la sécurité privée.
                </p>
                <span className ="separate"></span>
                <h2 className="parcours">PARCOURS PROFESSIONNEL</h2>
                <h3 className="h3-section-cv">2007 à  fin 2022, Agent de sécurité en CDI pour SECURITAS FRANCE SARL(BREST)</h3>
                <p className= "info-parcours">· Intervention sur zone en cas de déclenchement d'alarme, 
                    vérification des lieux et des systèmes, déclenchement d'alerte selon la procédure, 
                    rapport auprès de mon responsable.
                </p>
                <p className= "info-parcours">· Tenue du PC sécurité : surveillance des lieux à partir des écrans de contrôle, 
                    gestion de la communication radio, lancement d'interventions.
                </p>
                <p className= "info-parcours">· Sensibilisation du personnel aux règles de sécurité, transmission des consignes 
                    et de la conduite à tenir en cas de départ de feu (évacuation du public, mise en sécurité ...).
                </p>
                <p className= "info-parcours">· Assistance aux usagers en cas de malaise ou d'accident, évaluation de leur état 
                    de santé et apport des premiers soins, appel et accueil des équipes de secours (pompiers et Samu).
                </p>
                <p className= "info-parcours">· Examen des installations et des équipements de sécurité incendie, 
                    signalement des anomalies détectées et prise des mesures correctives correspondantes, renseignement du registre.
                </p>
                <h3 className="h3-section-cv">2000 à 2007. Agent de sécurité en CDI pour DGSI (PARIS)</h3>
                <h3 className="h3-section-cv">1995 à 1997 Paysagiste pour de multiples SARL (PARIS et BANLIEUES)</h3>
                <h2 className="formations">FORMATIONS</h2>
                <h3 className="h3-section-form">- OPENCLASSROOMS (à distance) Intégrateur-web (en cours) 2022 - 2023.</h3>
                <h3 className="h3-section-form">- SECURITAS, BREST (29) ACVS (Agent Chargé des Visites de Sûreté), Sûreté portuaire - 2018 .</h3>
                <h3 className="h3-section-form">- SECURITAS ORVAULT 44) EPI (Equipier de Première Intervention) Incendie - 2010 .</h3>
                <h3 className="h3-section-form">- LIGNES ET FORMATIONS (distanciel).MONTROUGE Niveau BEP Photographie - 2015 à 2016 .</h3>
                <h3 className="h3-section-form">- CREFOPS PARIS (75) SST (Sauveteur Secouriste du Travail) Assistance à personnes - 05/2000 - 05/2000 puis à jour.</h3>
                <h3 className="h3-section-form">- CREFOPS PARIS (75) SSIAP (Sécurité Incendie & d’Assistance à personne) Incendie - 04/2000 .</h3>
                <h3 className="h3-section-form">- Lycée polyvalent CHERIOUX . VITRY SUR SEINE (94) CAPA, BEPA, Paysagiste - 06/1995 .</h3>
            </div>
            </div>
        </div>
    )
}
export default CvPage;



