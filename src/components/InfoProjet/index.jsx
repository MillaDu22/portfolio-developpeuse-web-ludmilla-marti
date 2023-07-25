import { Navigate} from 'react-router-dom';
import '../InfoProjet/infoProjet.css';
import {useParams} from "react-router-dom";
import datasProjets from '../Datas-projets/datas-projets.json';
//import Tag from '../../components/Tags/index.jsx';
import Collapse from '../../components/Collapse/index.jsx';
//import Slider from '../Slider/index';

const InfoProjet = () => {
    const id = useParams(); 
    const ficheProjet = datasProjets.find ((datasprojet) => datasprojet.id === id.id);

    /*const TagsProjets = ficheProjet?.Tags.map ((Tags, index) => {
        return <Tag key = {index} title = {Tags} />
    });*/
    const equipementsProjet = ficheProjet?.equipements.map((equipement, index) => {
        return <div className="nav" key= {index}>
                    <ul className = "ulList"  >
                        <li className="liList">{equipement}</li>
                    </ul>
                </div>
    })
    return (
        <>
        {ficheProjet ? (
            <div className= 'infoProjet'>
                {/*<Slider images = {ficheProjet?.photos}/>*/}
                <section className="sectionInfo">
                    <div className="rowBoxes1">
                        <div className="leftBox">
                            <h2 className ="title">{ ficheProjet?.title }</h2>
                            <h3 className = "location">{ ficheProjet?.location }</h3>
                            {/*<div className=" containerMotsCles">{TagsProjets}</div>*/} 
                        </div>
                    </div>
                    <div className="rowBoxes2">
                        <div className = "boxInfo">
                        <Collapse title = "Description" content={ficheProjet?.description} />
                        </div>
                        <div className = "boxInfo">
                            <Collapse title = "Equipements" content={equipementsProjet}/>
                        </div>
                    </div>
                </section>
            </div>
            ) : <Navigate replace to = "/Error" />
        }
        </>
    );
};
export default InfoProjet;

