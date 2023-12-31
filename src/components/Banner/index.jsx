import "./banner.css";
import Tof from "../../assets/img/FB_IMG_1690363536869.webp";

function Banner () {
    return(
        <div className="banner">
            <span className="tof">
            <img src = {Tof} alt="profil" className="profil-banner" />
            </span>
            <div className="about-me">
                <h2 className= "welcome">Bienvenue sur mon portfolio !</h2>
                <p className= "txt-welcome">Après 23 années passées dans le domaine de la sécurité privée,
                    J'ai choisi de me reconvertir, par passion, dans le secteur du développement web.
                </p>
                <p className="txt-visit">Vous pouvez consulter quelques projets réalisés durant mon parcours Openclassrooms. </p>
            </div>
        </div>
    )
}
export default Banner;