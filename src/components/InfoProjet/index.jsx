import { Navigate} from 'react-router-dom';
import '../InfoProjet/infoProjet.css';
import {useParams} from "react-router-dom";
import datasProjets from '../Datas-projets/datas-projets.json';
import Tag from '../Tag/index';
import Slider from '../../components/Slider/index';

const InfoProjet = () => {
    const id = useParams(); 
    const ficheProjet = datasProjets.find ((datasprojet) => datasprojet.id === id.id);

    const TagsProjets = ficheProjet?.Tags.map ((Tags, index) => {
        return <Tag key = {index} title = {Tags} />
    });
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
                        <span className="txt-info-projet">{ficheProjet?.description}</span>
                    </span>
                    <ul className="liens-list">
                        <li className="lien"><a className="lien-a" href={ficheProjet?.code}>Voir le code du projet</a></li>
                        <li className="lien"><a className="lien-a" href={ficheProjet?.site}>Visiter le site</a></li>
                    </ul>
                </div>
                </div>
            </div>
            ) : <Navigate replace to = "/Error" />
        }
        </>
    );
};
export default InfoProjet;

