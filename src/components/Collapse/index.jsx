import React, {useState} from "react";
import chevron from "../../assets/img/chevron.png";
import './collapse.css';




const Collapse =({content}) => { 
    const [isOpen , setIsOpen] = useState(false);/*état du toggle par défaut*/
    const display = () => {
    setIsOpen(!isOpen);
    };
    return(
        <section>
            <div className="wrapInfo vrap" >
                <input type="checkbox" aria-checked="false" tabIndex="0" id="collapse1" className="toggleInfo" aria-label="collapse1" />
                <label htmlFor="collapse1" className="labelToggleInfo">
                    <p className=" labelTitleInfo" onClick ={display}>Les projets de mon parcours intégratrice web
                        {isOpen ? (<img src={chevron} className="chevron-up" alt="up" />) :
                        (<img src={chevron} className="chevron-down"alt="down"/>)}
                    </p>
                </label>
                <div className ="textInfo">
                    <div className="textInnerInfo">
                        {isOpen &&  Array.isArray(content) === false && <div className ="p-text-info">
                            <ul className="projets">
                                <li className ="projet"> - Le projet Riding Cities: Mes premiers pas vers le langage HTML.</li>
                                <li className ="projet"> - Le projet Booki: Création de la page d'accueil d'une agence de voyage avec HTML & CSS.</li>
                                <li className ="projet"> - Le projet Ohmyfood: Implémentation et amélioration de l'interface du site mobile avec des animations css.</li>
                                <li className ="projet"> - Le projet Print-It: Mes premiers pas vers le langage JavaScript.</li>
                                <li className ="projet"> - Le projet Architecte Sophie Bluel: Création d'une page xeb dynamique avec JavaScript.</li>
                                <li className ="projet"> - Le projet Menu by qwerta: Planification du développement du site du client.</li>
                                <li className ="projet"> - Le projet kasa: Création d'une application web de location immobilière avec React.</li>
                                <li className ="projet"> - Le projet Photographe Nina Carducci: Optimisation et référencement.</li>
                                <li className ="projet"> - Le projet 724events: Débuggage du site de l'agence d'évènementiel.</li>
                                <li className ="projet"> - Le projet Argent-Bank: Implémentation du front-end de l'application bancaire avec React.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Collapse;
