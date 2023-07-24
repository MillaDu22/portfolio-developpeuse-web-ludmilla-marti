import "./banner.css";
import Img from "../../assets/img/tianyi-ma-WiONHd_zYI4-unsplash.jpg";

function Banner () {
    return(
        <div className="banner">
            <img src= {Img} alt="ordinateur portable" className="image-banner" />
        </div>
    )
}
export default Banner;