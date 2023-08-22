import React, {useState} from "react";
import chevron from "../../assets/img/chevron.png";
import './collapse.css';





const Collapse =({ id, title, content, content1}) => { 
    const [isOpen , setIsOpen] = useState(false);
    const display = () => {
    setIsOpen(!isOpen);
    };
    return(
        <section>
            <div className="wrapInfo vrap" >
                <input type="checkbox" aria-checked="mixed" tabIndex="0" id = {id} className="toggleInfo" aria-labelledby= {id} aria-describedby= {id}/>
                <label htmlFor= {id} className="labelToggleInfo">
                    <p className=" labelTitleInfo" onClick ={display}>{title}
                        {isOpen ? (<img src={chevron} className="chevron-up" alt="up" />) :
                        (<img src={chevron} className="chevron-down"alt="down"/>)}
                    </p>
                </label>
                <div className ="textInfo">
                    <div className="textInnerInfo">
                        {isOpen &&  Array.isArray(content) === true && <div className ="p-text-info">{content}</div>}
                        {isOpen &&  Array.isArray(content1) === true && <div className ="p-text-info">{content1}</div>}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Collapse;
