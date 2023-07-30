import React, {useState} from "react";
import chevron from "../../assets/img/chevron.png";
import './collapse.css';

const Collapses =({content}) => { 
    const [isOpen , setIsOpen] = useState(false);/*état du toggle par défaut*/
    const display = () => {
    setIsOpen(!isOpen);
    };
    return(
        <section>
            <div className="wrapInfo vrap">
                <input type="checkbox" id="collapse" className="toggleInfo" />
                <label htmlFor="collapse" className="labelToggleInfo">
                    <p className=" labelTitleInfo" onClick ={display}>Mes certifications Openclassrooms
                        {isOpen ? (<img src={chevron} className="chevron-up" alt="up" />) :
                        (<img src={chevron} className="chevron-down"alt="down"/>)}
                    </p>
                </label>
                <div className ="textInfo">
                    <div className="textInnerInfo">
                        {isOpen &&  Array.isArray(content) === false && <div className="p-text-info">
                            <ul className="certifications">
                                <li className ="certifications"> - Les métiers de développeur.</li>
                                <li className ="certifications"> - Creer un site web avec HTML5 et CSS3.</li>
                                <li className ="certifications"> - Mettre en place son environnement front-end.</li>
                                <li className ="certifications"> - Le css avec Sass.</li>
                                <li className ="certifications"> - Programmer avec JavaScript.</li>
                                <li className ="certifications"> - Creer des animations css modernes.</li>
                                <li className ="certifications"> - Gerer du code avec Git et GitHub.</li>
                                <li className ="certifications"> - Utiliser la ligne de commande dans un terminal.</li>
                                <li className ="certifications"> - Le fonctionnement des algorithmes.</li>
                                <li className ="certifications"> - Ecrire du JavaScript pour le web.</li>
                                <li className ="certifications"> - Développeur agile.</li>
                                <li className ="certifications"> - React.</li>
                                <li className ="certifications"> - Optimisation du référencement d'un site (SEO) en améliorant les performances techniques.</li>
                                <li className ="certifications"> - L'accessibilité.</li>
                                <li className ="certifications"> - Tester et déboguer l'interface d'un site.</li>
                                <li className ="certifications"> - Ecrire du JavaScript pour le web.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Collapses;