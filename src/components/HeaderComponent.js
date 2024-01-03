import React, { useState } from 'react';
import HeaderContent from "./HeaderContent";
import '../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';

export default function HeaderComponent() {

    const [isLightMode, setIsLightMode] = useState(false);

    const toggleMode = () => {
        setIsLightMode((prevMode) => !prevMode);
        document.body.classList.toggle('light-mode');
    };

    return (
        <div className="space-between">
            <div className="header-container center-horizontal center-vertical fixed">
                <HeaderContent headerName="HOME" destinationURL="/home" />
                <HeaderContent headerName="WORK" destinationURL="/work" />
                <HeaderContent headerName="PROJECT" destinationURL="/project" />
                <HeaderContent headerName="SKILL" destinationURL="/skills" />
            </div>
            <div className="center-horizontal center-vertical fixed icon">
                <FontAwesomeIcon icon={faDev} className="icon close-button" id="toggleButton" onClick={toggleMode}  />
            </div>
        </div>
    );
}