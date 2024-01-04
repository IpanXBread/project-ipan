import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../css/styles.css';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
)

export default function Skills_Coding() {

    const data = {
        labels: ['JavaScript', 'TypeScript', 'Java', 'Phyton', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'],
        datasets: [
            {
                label: 'Proficiency',
                data: [8, 8, 5, 4, 8, 10, 1, 1],
                backgroundColor: '#216F79',
                borderColor: 'rgba(0, 0, 0, 0.4)',
                borderWidth: 2,
            }
        ]
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
            },
            x: {
                scales: {
                    x: {
                        barThickness: 5,
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: true,
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
        indexAxis: 'x',
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className=''>
            <div className="position-container">
                <h1 className="quicksand">CODING LANGUAGE</h1>
            </div>
            <div className="coding-container quicksand primary-color big-text">
                <div className="coding-container-inside">
                    <Bar
                        data={data}
                        options={options}
                        className="bar-chart quicksand primary-color big-text"
                    ></Bar>
                </div>
            </div>
        </div>
    );
}