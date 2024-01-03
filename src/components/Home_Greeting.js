import '../css/styles.css';
import Home_TypeAnimation from './Home_TypeAnimation';

export default function Home_Greeting() {

    const downloadResume = () => {
        console.log("download resume");
    }

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