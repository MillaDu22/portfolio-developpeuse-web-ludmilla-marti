import React from "react";


function LienCode ({title}) {
    return(
        <ul className="liens-list"> 
            <li className="lien"><a className="lien-a" href={title} target="blank">Voir le code</a></li>
        </ul>
    )
}
export default LienCode;