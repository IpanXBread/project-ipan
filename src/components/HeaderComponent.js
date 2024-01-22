import React, { useState, useEffect } from 'react';
import HeaderContent from "./HeaderContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff, faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/Header.css';
import '../css/styles.css';

export default function HeaderComponent() {
    const storedMode = localStorage.getItem('themeMode');
    const storedMobileView = localStorage.getItem('mobileView');
    
    const [isLightMode, setIsLightMode] = useState(storedMode === 'light');
    const [isMobile, setIsMobile] = useState(
        storedMobileView === null ? window.innerWidth < 600 : JSON.parse(storedMobileView)
    );
    const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);

     // Handle Light/Dark mode
     useEffect(() => {
        document.body.classList.toggle('light-mode', isLightMode);
    }, [isLightMode]);

    // Handle Mobile/Web view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const toggleMode = () => {
        const newMode = !isLightMode ? 'light' : 'dark';
        setIsLightMode((prevMode) => !prevMode);
        document.body.classList.toggle('light-mode', newMode === 'light');
        localStorage.setItem('themeMode', newMode);
    };

    const toggleDropMenu = () => {
        setIsDropMenuOpen((prevState) => !prevState);
    }

    return (
        <>
            {isMobile ? (
                <>
                    <div>
                        <div className="header-container" style={{ justifyContent: "end" }}>
                            <div style={{ width: "30px", height: "30px", display: "flex", justifyContent:"center", alignItems:"center", marginTop:"-20px", marginRight:"-15px", zIndex:"999"}} onClick={toggleDropMenu}>
                                <FontAwesomeIcon
                                    icon={faBars}
                                    className="icon close-button"
                                    id="toggleButton"
                                />
                            </div>
                            {isDropMenuOpen && (
                                <div className="mobile-menu">
                                    <HeaderContent headerName="HOME" destinationURL="/home"/>
                                    <HeaderContent headerName="WORK" destinationURL="/work" />
                                    <HeaderContent headerName="PROJECT" destinationURL="/project" />
                                    <HeaderContent headerName="SKILL" destinationURL="/skills" />
                                </div>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div className="space-between">
                    <div className="header-container center-horizontal center-vertical">
                        <HeaderContent headerName="HOME" destinationURL="/home" />
                        <HeaderContent headerName="WORK" destinationURL="/work" />
                        <HeaderContent headerName="PROJECT" destinationURL="/project" />
                        <HeaderContent headerName="SKILL" destinationURL="/skills" />
                    </div>
                    <div className="center-horizontal center-vertical icon">
                        <FontAwesomeIcon
                            icon={isLightMode ? faToggleOn : faToggleOff}
                            className="icon close-button"
                            style={{ marginTop: "-10px" }}
                            id="toggleButton"
                            onClick={toggleMode}
                        />
                    </div>
                </div>
            )}
        </>
    );
}