import '../css/styles.css';
import Skills_Building_Content from './Skills_Building_Content';

export default function Skills_Building() {

    const builds = ["Oriental Theme", "Fantasy Theme", "Idk Theme", "idk2 theme"];

    return (
        <div className='add-bottom'>
            <div className="position-container">
                <h1 className="quicksand big-text ">BUILDING</h1>
                <div className="quicksand up-text" style={{ color: "gray" }}>most of my free time spent on using my creativity.</div>
            </div>
            <div>
            <Skills_Building_Content title={builds} />
            </div>
        </div>
    );
}