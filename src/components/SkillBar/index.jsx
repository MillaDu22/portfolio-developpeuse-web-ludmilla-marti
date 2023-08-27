import React, { useEffect, useState } from 'react';
import "./SkillBar.css";

const SkillBar = ({ skillName, percentage }) => {
    const [progress, setProgress] = useState(0);
    const fillProgress = () => {
        let currentProgress = 0;
        const targetProgress = percentage;
        const animationDuration = 2000; // 2 secondes
        const increment = (targetProgress / animationDuration) * 10;
        const interval = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= targetProgress) {
                currentProgress = targetProgress;
                clearInterval(interval);
            }
            setProgress(currentProgress);
        }, 10);
    };
    useEffect(() => {
        fillProgress();//Appel function au raffraichissement de la page
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [percentage]);
    return (
        <div className="skill">
            <div className="skill-name">{skillName}</div>
            <div className="skill-bar">
                <div className="skill-level" style={{ width: `${progress}%` }}>
                    {Math.round(progress)}%
                </div>
            </div>
        </div>
    );
};

export default SkillBar;
