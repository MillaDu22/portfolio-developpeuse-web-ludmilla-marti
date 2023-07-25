import "./banniere.css";
import Img from "../../assets/img/michael-dziedzic-qDG7XKJLKbs-unsplash.jpg";

function Banner () {
    return(
        <div className="banner">
            <img src= {Img} alt="poste de travail de développeur" className="image-banner" />
        </div>
    )
}
export default Banner;