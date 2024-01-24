import sijil_muet from '../images/sijil_muet.png';
import '../css/styles.css';
import '../css/Home.css';

export default function Home_Exam() {

    const exams = [
        {
            title: "Malaysian University English Test (MUET)",
            imageName: sijil_muet,
        },
    ];

    return (
        <div className='home-content-container'>
            {/* Title */}
            <h2 className="font-bold tilt-prism" style={{paddingLeft:"10px", letterSpacing:"2px"}}>SPECIAL EXAM</h2>

            <div className="centered">
                {exams.map((exam, index) => (
                    <div key={index} className="gray-box-exam">
                        <h3>{exam.title}</h3>
                        <div className="centered">
                            <img src={exam.imageName} alt="exam" className="certificate-size"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}