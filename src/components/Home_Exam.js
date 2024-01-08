import '../css/styles.css';
import sijil_muet from '../images/sijil_muet.png';

export default function Home_Exam() {

    const exams = [
        {
            title: "Malaysian University English Test (MUET)",
            imageName: sijil_muet,
        },
    ];

    return (
        <div className='education'>
            {/* Title */}
            <h1 className="font-bold">SPECIAL EXAM</h1>

            <div className="centered">
                {exams.map((exam, index) => (
                    <div key={index} className="gray-box-certificate">
                        <h2>{exam.title}</h2>
                        <div className="centered">
                            <img src={exam.imageName} alt="exam" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}