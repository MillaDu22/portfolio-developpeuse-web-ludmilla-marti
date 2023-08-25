import React, { useEffect, useState } from 'react';
import "./SkillBar.css";

const SkillBar = ({ skillName, percentage }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
    setWidth(percentage);
    }, [percentage]);
    return (
    <div className="skill">
        <div className="skill-name">{skillName}</div>
        <div className="skill-bar">
            <div className="skill-level" style={{ width: `${width}%` }}>
                {width}%
            </div>
        </div>
    </div>
    );
};
export default SkillBar;
