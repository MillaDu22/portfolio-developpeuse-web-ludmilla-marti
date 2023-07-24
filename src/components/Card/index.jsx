import "./card.css";
import {Link} from "react-router-dom"
function Card (){
    return (
        <div className="card-wrapper">
            <Link className= "link-card" to="/projet">
                <div className = "card">
                    <span className="description">
                        <p className="content-titre">Titre projet</p>
                        <p className="content-text">Description</p>
                    </span>
                </div>
            </Link>
        </div>
    )
}
export default Card;