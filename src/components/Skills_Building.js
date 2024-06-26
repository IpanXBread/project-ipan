import '../css/styles.css';
import '../css/Skills.css';
import Skills_Building_Content from './Skills_Building_Content';
import { useMediaQuery } from 'react-responsive';

export default function Skills_Building() {
    const isMobile = useMediaQuery({ maxWidth: 728 });
    const builds = ["Oriental Theme", "Fantasy Theme"];

    return (
        <div className='add-bottom'>
            <div className={`position-container ${isMobile ? 'mobile-position' : ''}`}>
                <h2 className="quicksand">BUILDING</h2>
                <div className="quicksand up-text" style={{ color: "gray" }}>most of my free time spent on using my creativity.</div>
            </div>
            <div>
            <Skills_Building_Content title={builds} />
            </div>
        </div>
    );
}