import "./card.scss";
import {Link} from "react-router-dom"
function Card  ({id, cover, title, informations}){
    return (
        <main>
            <Link className= "link-card" to={ `/projet/${id}`}>
                <div className = "card">
                    <img src={cover} alt = "coverCard" className="coverCard"/>
                    <div className="card-content">
                        <h3 className = "titreCard">{ title }</h3>
                        <p className ="informations">{ informations }Informations</p>
                    </div>
                </div>
            </Link>
        </main>
    )
}
export default Card;
