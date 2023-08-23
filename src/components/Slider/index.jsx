import './slider.min.css';
import { useState } from 'react';

function Slider ({images}) {
    let [current, setCurrent] = useState(0);
    let length = images.length;
    const nextImage = () => {
        setCurrent(current === length -1 ? 0 : current +1); 
    };
    const previousImage = () => {
        setCurrent (current === 0 ? length - 1 : current - 1);
    }; 
    return  (
        <div className="slider">
            <div className='containerArrows'>
                {length > 1 &&<i className="fa-solid fa-chevron-left left" onClick = { previousImage }></i>}
                {length > 1 &&<i className="fa-solid fa-chevron-right right" onClick = { nextImage }></i>}
            </div>
            { images.map ((image, index) => {
                return ( 
                    <div key = { index } className = { index === current ? " slides active" : "slides" } >
                    { index === current && ( <img className = "imgSlider" src= { image } alt="imgSlider" />) }
                        <div className ="counterSlide">
                            {length > 1 && <span className="count"> { current+1 }/{ images.length }</span>}
                        </div>
                    </div>
                    )
                }
            )}
        </div> 
    ) 
}
export default Slider;