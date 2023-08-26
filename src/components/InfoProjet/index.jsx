import { Navigate} from 'react-router-dom';
import '../InfoProjet/infoProjet.css';
import {useParams} from "react-router-dom";
import datasProjets from '../Datas-projets/datas-projets.json';
import Tag from '../Tag/index';
import Slider from '../../components/Slider/index';
import LienCode from "../LienCode/index";
import LienSite from "../LienSite/index";
import CircleSkillHtml from "../CircleSkillHtml/indexHtml";
import CircleSkillCss from "../CircleSkillCss/indexCss";
import CircleSkillJs from '../CircleSkillJs/indexJs';


const InfoProjet = () => {
    const id = useParams(); 
    const ficheProjet = datasProjets.find ((datasprojet) => datasprojet.id === id.id);
    const TagsProjets = ficheProjet?.Tags.map ((Tags, index) => {
        return <Tag key = {index} title = {Tags} />
    });
    const CodesProjets = ficheProjet?.code.map ((code, index) => {
        return <LienCode key = {index} title = {code} />
    });
    let SitesProjets = null;
    if (ficheProjet.site && ficheProjet.site.length > 0) {
        SitesProjets = ficheProjet.site.map((site, index) => {
            return <LienSite key={index} title={site} />
        });
    };

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
                        <div className=" container-liens">{CodesProjets}{SitesProjets}</div> 
                    </div>
                </div>
                <h3 className="titre-circle-skill-box">Niveaux d'utilisation des technologies sur ce projet</h3>
                <div className= "container-circle-skill">
                    <CircleSkillHtml 
                        percentage= {ficheProjet?.html}/>
                    <CircleSkillCss 
                        percentage= {ficheProjet?.css}/>
                    <CircleSkillJs 
                        percentage= {ficheProjet?.js}/>
                </div>
            </div>
            ) : <Navigate replace to = "/Error" />
        }
        </>
    );
};
export default InfoProjet;

