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
                <input aria-checked="false" tabindex="0" type="checkbox" id="collapse2" className="toggleInfo" aria-label="collapse2"  />
                <label htmlFor="collapse2" className="labelToggleInfo">
                    <p className=" labelTitleInfo" onClick ={display}>Mes certifications Openclassrooms
                        {isOpen ? (<img src={chevron} className="chevron-up" alt="up" />) :
                        (<img src={chevron} className="chevron-down"alt="down"/>)}
                    </p>
                </label>
                <div className ="textInfo">
                    <div className="textInnerInfo">
                        {isOpen &&  Array.isArray(content) === false && <div className="p-text-info">
                            <ul className="certifications">
                                <li className ="certification"> - Les métiers de développeur.</li>
                                <li className ="certification"> - Creer un site web avec HTML5 et CSS3.</li>
                                <li className ="certification"> - Mettre en place son environnement front-end.</li>
                                <li className ="certification"> - Le css avec Sass.</li>
                                <li className ="certification"> - Programmer avec JavaScript.</li>
                                <li className ="certification"> - Creer des animations css modernes.</li>
                                <li className ="certification"> - Gerer du code avec Git et GitHub.</li>
                                <li className ="certification"> - Utiliser la ligne de commande dans un terminal.</li>
                                <li className ="certification"> - Le fonctionnement des algorithmes.</li>
                                <li className ="certification"> - Ecrire du JavaScript pour le web.</li>
                                <li className ="certification"> - Développeur agile.</li>
                                <li className ="certification"> - React.</li>
                                <li className ="certification"> - Optimisation du référencement d'un site (SEO) en améliorant les performances techniques.</li>
                                <li className ="certification"> - L'accessibilité.</li>
                                <li className ="certification"> - Tester et déboguer l'interface d'un site.</li>
                                <li className ="certification"> - Ecrire du JavaScript pour le web.</li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Collapses;