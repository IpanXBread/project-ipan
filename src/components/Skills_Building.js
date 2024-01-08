import '../css/styles.css';
import Skills_Building_Content from './Skills_Building_Content';

export default function Skills_Building() {

    const builds = {
        oriental: {
            title: 'Oriental Theme',
            duration: '2 weeks',
            status: 'done',
            image1: '',
            image2: '',
            image3: '', 
        },
        futuristic: {
            title: 'Futuristic Spawn',
            duration: '2 weeks',
            status: 'not finish',
            image1: '',
            image2: '',
            image3: '', 
        },
        klcc: {
            title: 'Petronas Twin Tower',
            duration: '2 weeks',
            status: 'done',
            image1: '',
            image2: '',
            image3: '', 
        },
    }

    return (
        <div className='add-bottom'>
            <div className="position-container">
                <h1 className="quicksand big-text ">BUILDING</h1>
            </div>
            <div>
                <Skills_Building_Content {...builds.oriental}/>
                <Skills_Building_Content {...builds.futuristic}/>
                <Skills_Building_Content {...builds.klcc}/>
            </div>
        </div>
    );
}