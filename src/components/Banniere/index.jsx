import "./banniere.min.css";


function Banniere () {
    return(
        <div className="banniere">
            <h2 className ="title-banniere"> A propos de mon parcours Openclassrooms</h2>
            <span className="txt-banniere">
                <p className="paragraphe">Sur 9 mois de formation, j'ai effectué 12 projets, et pu obtenir des certifications. Vous pouvez les consulter sur cette page.</p>
                <p className= "icon linkedin"><a href="https://www.linkedin.com/in/ludmilla-marti-345313255/" aria-label="linkedin"><i className="fa-brands fa-linkedin"></i></a></p>
            </span>
        </div>
    )
}
export default Banniere;