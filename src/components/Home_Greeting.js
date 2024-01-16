import '../css/styles.css';
import Home_TypeAnimation from './Home_TypeAnimation';
import resumeIpan from '../images/resume_ipan_2024.png';

export default function Home_Greeting() {

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resumeIpan;
        link.download = 'resume_ipan_2024.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='container'>
            <h3 className="quicksand"> ⸻ Hello</h3>
            <h1 className="chakra-petch big-text">I'm Irfan Imran</h1>
            <h3 className="chakra-petch primary-color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Software Developer</h3>
            <h5 className='thin quicksand text-less-color'>I am <Home_TypeAnimation /></h5>
            <div class="download-cv rajdhani" onClick={() => downloadResume()}>
                <p>Download Resume</p>
            </div>
        </div>
    );
}