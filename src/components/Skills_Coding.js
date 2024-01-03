import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    ToolTip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../css/styles.css';

export default function Skills_Coding() {

    const coding_language = [
        {
            language: "JavaScript",
            level: 8,
        },
        {
            language: "TypeScript",
            level: 8,
        },
        {
            language: "Java",
            level: 5,
        },
        {
            language: "Phyton",
            level: 4,
        },
        {
            language: "HTML",
            level: 8,
        },
        {
            language: "CSS",
            level: 10,
        },
        {
            language: "Tailwind",
            level: 1,
        },
    ];

    return (
        <div className=''>
            <div className="position-container">
                <h1 className="quicksand">CODING LANGUAGE</h1>
            </div>
            <div className="skill-coding-container">
                {coding_language.map((coding, index) => (
                    <div key={index}>
                        <h4 className="quicksand">{coding.language}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}