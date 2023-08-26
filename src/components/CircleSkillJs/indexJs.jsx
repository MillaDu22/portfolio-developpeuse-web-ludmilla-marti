import React, { useEffect, useState } from 'react';
import './CircleSkillJs.css';

const CircleSkillBarJs = ({percentage}) => {
    const [progress3, setProgress3] = useState(0);
    useEffect(() => {
    // Fonction pour le remplissage progressif
        const fillProgress3 = () => {
            let currentProgress3 = 0;
            const targetProgress3 = percentage; 
            const animationDuration3 = 1000; // 2 secondes
            const increment3 = (targetProgress3 / animationDuration3) * 10;
            const interval3 = setInterval(() => {
                currentProgress3 += increment3;
                if (currentProgress3 >= targetProgress3) {
                    currentProgress3 = targetProgress3;
                    clearInterval(interval3);
                }
                setProgress3(currentProgress3);
            }, 10);
        };
        // Appel de la fonction de remplissage progressif au chargement de la page
        fillProgress3();
    }, [percentage]);
    const circleStyle = {
        background: `conic-gradient(#ffff00 ${progress3}%, #ccc ${progress3}%)`,
    };
    const roundedProgress3 = Math.round(progress3) // Pour éviter les décimals

    return (
        <div className="circular-skill-bar">
            <h3 className="titre-skill">Javascript</h3>
            <div className="circle-background">
                <div className="circle-progress" style={circleStyle}></div>
                <div className="percentage-text">{`${roundedProgress3}%`}</div>
            </div>
        </div>
    );
};

export default CircleSkillBarJs;