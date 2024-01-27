import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faYoutube, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';
import '../css/styles.css';
import '../css/Footer.css';

export default function FooterComponent() {
    const isMobile = useMediaQuery({ maxWidth: 600 });

    const handleCopyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert(`Copied ${text} successfully`);
            })
            .catch((err) => {
                console.error('Unable to copy to clipboard', err);
            });
    };

    return (
        <>
            {isMobile ? (
                <div className="footer">
                    <div className="normal-text-size one-line" onClick={() => handleCopyToClipboard('irfanimranx@gmail.com')}>
                        <i className="fas fa-envelope"></i>&nbsp;irfanimranx@gmail.com
                    </div>
                    <div className="normal-text-size one-line" onClick={() => handleCopyToClipboard('60169232646')}>
                        <i className="fas fa-phone"></i>&nbsp;+6016-923-2646
                    </div>
                </div>
            ) : (
                <div className="footer">
                    <div className="normal-text-size one-line"><i className="fas fa-envelope"></i>&nbsp;irfanimranx@gmail.com</div>
                    <div>
                        <a className="icon-link" href="https://www.linkedin.com/in/irfan--imran/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
                        <a className="icon-link" href="https://github.com/IpanXBread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                        <a className="icon-link" href="https://www.youtube.com/@ipanxbread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className="icon" /></a>
                        <a className="icon-link" href="https://www.tiktok.com/@ipanxbread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} className="icon" /></a>
                    </div>
                    <div className="normal-text-size one-line"><i className="fas fa-phone"></i>&nbsp;+6016-923-2646</div>
                </div>
            )}
        </>
    );
}