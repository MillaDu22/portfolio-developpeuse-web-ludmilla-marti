import "./card.scss";
import {Link} from "react-router-dom";

function Card  ({id, cover, title, informations}){
    return (
        <div className ="card-box">
            <Link className= "link-card" to={ `/projet/${id}`}>
                <div className = "card">
                    <img src= {cover} alt = "coverCard" className="coverCard"/>
                    <div className="card-content">
                        <p className ="informations">{ informations }</p>
                        <h3 className = "titreCard">{ title }</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Card;
