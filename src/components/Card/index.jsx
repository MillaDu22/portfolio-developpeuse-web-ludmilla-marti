import "./card.scss";
import {Link} from "react-router-dom";

function Card  ({id, cover, alt, title, informations}){
    return (
        <div className ="card-box">
            <Link className= "link-card" to={ `/projet/${id}`}>
                <div className = "card">
                    <img src= {cover} alt = {alt} className="coverCard"/>
                    <div className="card-content">
                        <span className ="informations">{ informations }<p className="voir">Lire +</p></span>
                        <h3 className = "titreCard">{ title }</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Card;
