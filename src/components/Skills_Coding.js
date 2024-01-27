import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';
import '../css/styles.css';
import '../css/Skills.css';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
)

export default function Skills_Coding() {

    const isMobile = useMediaQuery({ maxWidth: 600 });

    const data = {
        labels: ['JavaScript', 'TypeScript', 'Java', 'Phyton', 'React', 'React Native', 'CSS', 'Tailwind', 'Bootstrap'],
        datasets: [
            {
                label: 'Proficiency',
                data: [8, 8, 5, 4, 9, 9, 10, 2, 1],
                backgroundColor: '#216F79',
                borderColor: 'rgba(0, 0, 0, 0.7)',
                borderWidth: 2,
            }
        ]
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                ticks: {
                    fontSize: 16, // Set the font size for the y-axis labels
                },
            },
            x: {
                scales: {
                    x: {
                        barThickness: 5,
                        ticks: {
                            fontSize: 16, // Set the font size for the x-axis labels
                        },
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: isMobile ? false : true,
                position: 'top',
                labels: {
                    font: {
                        size: 20
                    }
                }
            },
            title: {
                display: false,
                text: 'Coding Language',
            },
        },
        layout: {
            padding: {
                left: 20,
                bottom: 20,
            },
        },
        indexAxis: isMobile ? 'y' : 'x',
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className=''>
            <div className="position-container">
                <h2 className="quicksand">CODING LANGUAGE</h2>
            </div>
            <div className="coding-container">
                <div className="coding-container-inside">
                    <Bar
                        data={data}
                        options={options}
                        className="quicksand primary-color coding-container-inside"
                    ></Bar>
                </div>
                <div className="coding-container-inside2">
                    <div className="mobile-left-padding-only">
                        <h2 className=" josefin-sans">From Me</h2>
                        <parent className="fix-overflow-text quicksand spacing-text text-alignment-little-left primary-light-color justify-text customsize">
                            To code efficiently, grasp <span className="bold-text">HOW</span> it works. Syntax mistakes? ChatGPT and StackOverflow are your pals. Know <span className="bold-text">WHERE</span> to find answers, <span className="bold-text">WHAT</span> questions to ask, and <span className="bold-text">WHY</span> solutions work. It's all about understanding coding.
                        </parent>
                    </div>
                </div>

            </div>
        </div>
    );
}