import React, {useState} from "react";
import chevron from "../../assets/img/chevron.png";
import './collapse.css';




const Collapse =({title, content}) => { 
    const [isOpen , setIsOpen] = useState(false);/*état du toggle par défaut*/
    const display = () => {
    setIsOpen(!isOpen);
    };
    return(
        <div className="wrapInfo vrap" >
            <input type="checkbox" id="collapse" className="toggleInfo" />
            <label htmlFor="collapse" className="labelToggleInfo">
                <p className=" labelTitleInfo" onClick ={display}>{title}
                    {isOpen ? (<img src={chevron} className="chevron-up" alt="up" />) :
                    (<img src={chevron} className="chevron-down"alt="down"/>)}
                </p>
            </label>
            <div className ="textInfo">
                <div className="textInnerInfo">
                    {isOpen &&  Array.isArray(content) === false && <div className="pTextInfo">{content}</div>}
                    {isOpen &&  Array.isArray(content) === true && <div className="pTextInfo">{content}</div>}
                </div>
            </div>
        </div>
    )
}
export default Collapse;
