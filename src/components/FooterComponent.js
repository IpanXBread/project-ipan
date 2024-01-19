import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/styles.css';
import '../css/Footer.css';

export default function FooterComponent() {

    
    return (
        <div className="footer">
            <div><i className="fas fa-envelope"></i>&nbsp;irfanimranx@gmail.com</div>
            <div>
                <a className="icon-link" href="https://www.facebook.com/IpanXBread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                <a className="icon-link" href="https://www.instagram.com/ipanxbread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                <a className="icon-link" href="https://www.youtube.com/@ipanxbread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className="icon" /></a>
                <a className="icon-link" href="https://www.tiktok.com/@ipanxbread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} className="icon" /></a>
                <a className="icon-link" href="https://github.com/IpanXBread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
            </div>
            <div><i className="fas fa-phone"></i>&nbsp;+6016-923-2646</div>
        </div>
    );
}