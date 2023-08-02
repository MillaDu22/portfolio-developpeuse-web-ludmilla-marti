import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

function Footer() {
    return(
        <div className="footer">
        <Link className="link-page" to="/a-propos-page">©Ludmilla-Marti-2023</Link>
            <a className= "mailto" href="mailto:marti.ludmilla@orange.fr">- Contact ici -</a>
        </div>
    )
}
export default Footer;