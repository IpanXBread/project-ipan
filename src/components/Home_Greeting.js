import Home_TypeAnimation from './Home_TypeAnimation';
import resumeIpan from '../images/resume_ipan_2024.png';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/styles.css';
import '../css/Home.css';

export default function Home_Greeting() {
    const isMobile = useMediaQuery({ maxWidth: 600 });

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resumeIpan;
        link.download = 'resume_ipan_2024.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {isMobile ? (
                <div className='container'>
                    <h3 className="quicksand"> ⸻ Hello</h3>
                    <h1 className="chakra-petch big-text">I'm Irfan Imran</h1>
                    <h3 className="chakra-petch primary-color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Software Developer</h3>
                    <h5 className='thin quicksand text-less-color'>I am <Home_TypeAnimation /></h5>
                    <div class="download-cv rajdhani" onClick={() => downloadResume()}>
                        <p>Download Resume</p>
                    </div>
                    <div style={{padding:"10px"}}>
                        <a className="icon-link" href="https://www.facebook.com/IpanXBread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                        <a className="icon-link" href="https://www.instagram.com/ipanxbread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                        <a className="icon-link" href="https://www.youtube.com/@ipanxbread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className="icon" /></a>
                        <a className="icon-link" href="https://www.tiktok.com/@ipanxbread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} className="icon" /></a>
                        <a className="icon-link" href="https://github.com/IpanXBread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <h3 className="quicksand"> ⸻ Hello</h3>
                    <h1 className="chakra-petch big-text">I'm Irfan Imran</h1>
                    <h3 className="chakra-petch primary-color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Software Developer</h3>
                    <h5 className='thin quicksand text-less-color'>I am <Home_TypeAnimation /></h5>
                    <div class="download-cv rajdhani" onClick={() => downloadResume()}>
                        <p>Download Resume</p>
                    </div>
                </div>
            )}
        </>
    );
}