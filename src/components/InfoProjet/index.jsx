import { Navigate} from 'react-router-dom';
import '../InfoProjet/infoProjet.css';
import {useParams} from "react-router-dom";
import datasProjets from '../Datas-projets/datas-projets.json';
import Tag from '../Tag/index';
//import Collapse from '../../components/Collapse/index.jsx';
import Slider from '../../components/Slider/index';

const InfoProjet = () => {
    const id = useParams(); 
    const ficheProjet = datasProjets.find ((datasprojet) => datasprojet.id === id.id);

    const TagsProjets = ficheProjet?.Tags.map ((Tags, index) => {
        return <Tag key = {index} title = {Tags} />
    });
    /*const equipementsProjet = ficheProjet?.equipements.map((equipement, index) => {
        return <div className="nav" key= {index}>
                    <ul className = "ulList"  >
                        <li className="liList">{equipement}</li>
                    </ul>
                </div>
    })*/
    return (
        <>
        {ficheProjet ? (
            <div className= 'info-projet-box'>
                <h2 className ="title">{ ficheProjet?.title }</h2>
                <div className="display-row">
                <Slider images = {ficheProjet?.photos}/>
                <div className="info-projet">
                <div className=" container-mots-cles">{TagsProjets}</div>
                    <span className="back-info-projet">
                        <span className="txt-info-projet"></span>
                        {/*<section className="aside">
                            <div className = "box-info">
                                <Collapse title = "Versions" content={ficheProjet?.description} />
                            </div>
                            <div className = "box-info">
                                <Collapse title = "Technologies" content={equipementsProjet}/>
                            </div>
                        </section>*/}
                    </span>
                </div>
                </div>
            </div>
            ) : <Navigate replace to = "/Error" />
        }
        </>
    );
};
export default InfoProjet;

