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
                <Collapse title='Conception ou refonte' content="Une conception de votre site axée sur les besoins de votre activité professionelle et de l'experience utilisateur. Une refonte de votre site web optimisera sa structure, son arborescence et sa construction globale, tout en mettant à jour son panel de fonctionnalités." />
            </div>
            <div className = "box">
                <Collapse title='Performance' content="La performance est l'indicateur de santé de votre site web, et sera optimisé." />
            </div>
            <div className = "box">
                <Collapse title='Accessibilité' content="L’accessibilité est un critère essentiel qui commence avec votre site web, il suivra les règles pour l'accessibilité des contenus Web." />
            </div>
            <div className = "box">
                <Collapse title='Bonnes Pratiques' content="Votre site web sera conçu également pour les utilisateurs mobile avec une experience, fluide et rapide." />
            </div>
            <div className = "box">
                <Collapse title='SEO' content="L’ensemble des techniques sera mis en œuvre pour améliorer la position de votre site web sur les pages de résultats des moteurs de recherche (SERP). Grâce à la visibilité de votre site web, il gagnera des places sur les moteurs de recherche (Google, mais aussi Yahoo !, Bing, etc.)." />
            </div>
        </section>
        </div>
    )
}
export default AProposPage
