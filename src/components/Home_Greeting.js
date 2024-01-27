import Home_TypeAnimation from './Home_TypeAnimation';
import resumeIpan from '../images/resume_ipan_2024.png';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faYoutube, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';
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
                    <h4 className="quicksand" style={{ margin: '8px 0 0 0' }} > ⸻ Hello</h4>
                    <h2 className="chakra-petch" style={{ margin: '8px 0 0 0' }} >I'm Irfan Imran</h2>
                    <h4 className="chakra-petch primary-color" style={{ margin: '8px 0 0 0' }} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Software Developer</h4>
                    <h5 className='thin quicksand text-less-color' style={{ margin: '8px 0 16px 0' }} >I am <Home_TypeAnimation /></h5>
                    <div class="download-cv rajdhani" onClick={() => downloadResume()}>
                        <p>Download Resume</p>
                    </div>
                    <div style={{ padding: "15px"}}>
                        <a style={{ marginRight:"6px", marginLeft:"6px" }} className="icon-link" href="https://www.linkedin.com/in/irfan--imran/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
                        <a style={{ marginRight:"6px", marginLeft:"6px" }} className="icon-link" href="https://github.com/IpanXBread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                        <a style={{ marginRight:"6px", marginLeft:"6px" }} className="icon-link" href="https://www.youtube.com/@ipanxbread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className="icon" /></a>
                        <a style={{ marginRight:"6px", marginLeft:"6px" }} className="icon-link" href="https://www.tiktok.com/@ipanxbread" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} className="icon" /></a>
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <h4 className="quicksand" style={{ margin: '0 0 0 0' }}> ⸻ Hello</h4>
                    <h2 className="chakra-petch" style={{ margin: '10px 0 0 0' }}>I'm Irfan Imran</h2>
                    <h4 className="chakra-petch primary-color" style={{ margin: '10px 0 0 0' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Software Developer</h4>
                    <h5 className='thin quicksand text-less-color'>I am <Home_TypeAnimation /></h5>
                    <div class="download-cv rajdhani" onClick={() => downloadResume()}>
                        <p>Download Resume</p>
                    </div>
                </div>
            )}
        </>
    );
}